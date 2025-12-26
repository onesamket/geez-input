import {
  CONSONANTS,
  SYLLABLES,
  MULTI_CONSONANTS,
  PUNCTUATION,
} from "./mapping";
import type { EngineResult } from "./types";

/**
 * Core transformation engine for converting Latin phonetic input to Geez script
 *
 * This engine handles the complex rules of Geez syllabic writing system where
 * consonants combine with vowels to form syllables. It processes text character
 * by character, applying transformations based on context and phonetic rules.
 *
 * @example
 * \`\`\`ts
 * const result = GeezEngine.transform('h', '', 'a')
 * // result.transformedValue === 'ሀ'
 * // result.isReplacement === true
 * \`\`\`
 */
export class GeezEngine {
  /**
   * Transform input text based on a new key press
   *
   * The transformation process follows these rules in order:
   * 1. Check for punctuation combinations (: + : → ።)
   * 2. Check for multi-character consonants (s + h → ሽ)
   * 3. Check for syllable modifications (ህ + a → ሀ)
   * 4. Check for double vowel forms (ሀ + a → ሃ)
   * 5. Check for new consonants (h → ህ)
   * 6. Pass through unrecognized characters
   *
   * @param textBeforeCursor - Text content before the cursor position
   * @param textAfterCursor - Text content after the cursor position
   * @param key - The character key that was pressed
   * @returns Transformation result with new text and cursor position
   *
   * @example
   * \`\`\`ts
   * // Simple consonant
   * GeezEngine.transform('', '', 'h')
   * // → { transformedValue: 'ህ', newCursorPosition: 1, isReplacement: false }
   *
   * // Syllable formation
   * GeezEngine.transform('ህ', '', 'a')
   * // → { transformedValue: 'ሀ', newCursorPosition: 1, isReplacement: true }
   *
   * // Multi-character consonant
   * GeezEngine.transform('ስ', '', 'h')
   * // → { transformedValue: 'ሽ', newCursorPosition: 1, isReplacement: true }
   * \`\`\`
   */
  static transform(
    textBeforeCursor: string,
    textAfterCursor: string,
    key: string
  ): EngineResult {
    const lastChar = textBeforeCursor.slice(-1);
    const combined = lastChar + key;

    if (PUNCTUATION[combined]) {
      return {
        transformedValue:
          textBeforeCursor.slice(0, -1) +
          PUNCTUATION[combined] +
          textAfterCursor,
        newCursorPosition: textBeforeCursor.length,
        isReplacement: true,
      };
    }
    if (PUNCTUATION[key]) {
      return {
        transformedValue: textBeforeCursor + PUNCTUATION[key] + textAfterCursor,
        newCursorPosition: textBeforeCursor.length + 1,
        isReplacement: false,
      };
    }

    if (MULTI_CONSONANTS[combined]) {
      return {
        transformedValue:
          textBeforeCursor.slice(0, -1) +
          MULTI_CONSONANTS[combined] +
          textAfterCursor,
        newCursorPosition: textBeforeCursor.length,
        isReplacement: true,
      };
    }

    // Check for multi-character Latin consonants (e.g., "ch", "sh", "zh", "gn", "rR")
    // This must happen before single character checks to handle sequences like "c" + "h" → "ch" → "ች"
    if (
      CONSONANTS[combined] &&
      lastChar.length === 1 &&
      /^[a-zA-Z]$/.test(lastChar) &&
      /^[a-zA-Z]$/.test(key)
    ) {
      return {
        transformedValue:
          textBeforeCursor.slice(0, -1) +
          CONSONANTS[combined] +
          textAfterCursor,
        newCursorPosition: textBeforeCursor.length,
        isReplacement: true,
      };
    }

    // Handle wa-series: consonant + ው + vowel → labialized form
    // e.g., ክ + ው + a → ኳ (kwa)
    // This must be checked BEFORE regular syllable transformation to prevent ው→ዋ transformation
    if (lastChar === "ው" && ["a", "i", "e", "u"].includes(key)) {
      const charBeforeW = textBeforeCursor.slice(-2, -1);
      const charBeforeWSyllables = SYLLABLES[charBeforeW];

      if (charBeforeWSyllables) {
        // Map vowel keys to wa-series keys
        const waSeriesKey =
          key === "a"
            ? "wa"
            : key === "i"
              ? "wi"
              : key === "e"
                ? "we"
                : key === "u"
                  ? "wu"
                  : null;

        if (waSeriesKey && charBeforeWSyllables[waSeriesKey]) {
          return {
            transformedValue:
              textBeforeCursor.slice(0, -2) +
              charBeforeWSyllables[waSeriesKey] +
              textAfterCursor,
            newCursorPosition: textBeforeCursor.length - 1,
            isReplacement: true,
          };
        }
      }
    }

    // Handle wa-series ee form: consonant + we (ኰ, ቈ, etc.) + e → wee form (ኴ, ቌ, etc.)
    // e.g., ኰ + e → ኴ (kwee)
    if (key === "e") {
      const charBeforeW = this.findCharBeforeWaSeries(lastChar);
      if (charBeforeW) {
        const charBeforeWSyllables = SYLLABLES[charBeforeW];
        if (charBeforeWSyllables && charBeforeWSyllables["wee"]) {
          return {
            transformedValue:
              textBeforeCursor.slice(0, -1) +
              charBeforeWSyllables["wee"] +
              textAfterCursor,
            newCursorPosition: textBeforeCursor.length,
            isReplacement: true,
          };
        }
      }
    }

    // Regular syllable transformation (for non-wa-series cases)
    const lastCharSyllables = SYLLABLES[lastChar];
    if (lastCharSyllables && lastCharSyllables[key]) {
      return {
        transformedValue:
          textBeforeCursor.slice(0, -1) +
          lastCharSyllables[key] +
          textAfterCursor,
        newCursorPosition: textBeforeCursor.length,
        isReplacement: true,
      };
    }

    // Check if last character is a vowel form (not base) and key is 'e' - convert to 'ee' form (5th form/Hamis)
    // This handles cases like "hie" where 'i' form (ሂ) + 'e' should become 'ee' form (ሄ)
    if (key === "e" && lastChar) {
      const sadisBase = this.findSadisBase(lastChar);
      // Only convert if lastChar is NOT the base itself (i.e., it's a modified vowel form)
      if (sadisBase && sadisBase !== lastChar) {
        const sadisBaseSyllables = SYLLABLES[sadisBase];
        if (sadisBaseSyllables && sadisBaseSyllables["ee"]) {
          return {
            transformedValue:
              textBeforeCursor.slice(0, -1) +
              sadisBaseSyllables["ee"] +
              textAfterCursor,
            newCursorPosition: textBeforeCursor.length,
            isReplacement: true,
          };
        }
      }
    }

    if (["a", "i"].includes(key)) {
      const sadisBase = this.findSadisBase(lastChar);
      if (sadisBase) {
        const sadisBaseSyllables = SYLLABLES[sadisBase];
        if (sadisBaseSyllables) {
          const doubleVowelKey = key + key;
          const doubleVowelForm = sadisBaseSyllables[doubleVowelKey];
          if (doubleVowelForm) {
            return {
              transformedValue:
                textBeforeCursor.slice(0, -1) +
                doubleVowelForm +
                textAfterCursor,
              newCursorPosition: textBeforeCursor.length,
              isReplacement: true,
            };
          }
        }
      }
    }

    if (CONSONANTS[key]) {
      return {
        transformedValue: textBeforeCursor + CONSONANTS[key] + textAfterCursor,
        newCursorPosition: textBeforeCursor.length + 1,
        isReplacement: false,
      };
    }

    return {
      transformedValue: textBeforeCursor + key + textAfterCursor,
      newCursorPosition: textBeforeCursor.length + 1,
      isReplacement: false,
    };
  }

  /**
   * Find the base consonant form (ስድስት/sadis form) for a given character
   *
   * This method searches through the syllable mappings to find which base
   * consonant a character belongs to, even if it's a modified form.
   *
   * @param char - The character to find the base form for
   * @returns The base consonant character, or null if not found
   * @private
   *
   * @example
   * \`\`\`ts
   * GeezEngine.findSadisBase('ሀ') // returns 'አ' (base for ሀ)
   * GeezEngine.findSadisBase('ላ') // returns 'ል' (base for ላ)
   * GeezEngine.findSadisBase('x') // returns null (not a Geez character)
   * \`\`\`
   */
  private static findSadisBase(char: string): string | null {
    for (const [sadis, forms] of Object.entries(SYLLABLES)) {
      if (sadis === char) return sadis;
      if (Object.values(forms).includes(char)) return sadis;
    }
    return null;
  }

  /**
   * Find the base consonant for a wa-series character
   *
   * This checks if a character is a "we" form (e.g., ኰ, ቈ, ጐ, ኈ)
   * and returns its base consonant if it is.
   *
   * @param char - The character to check
   * @returns The base consonant character, or null if not a we form
   * @private
   *
   * @example
   * \`\`\`ts
   * GeezEngine.findCharBeforeWaSeries('ኰ') // returns 'ክ'
   * GeezEngine.findCharBeforeWaSeries('ቈ') // returns 'ቅ'
   * GeezEngine.findCharBeforeWaSeries('ላ') // returns null
   * \`\`\`
   */
  private static findCharBeforeWaSeries(char: string): string | null {
    for (const [sadis, forms] of Object.entries(SYLLABLES)) {
      if (forms["we"] === char) return sadis;
    }
    return null;
  }
}
