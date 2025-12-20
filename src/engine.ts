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

    if (SYLLABLES[lastChar] && SYLLABLES[lastChar][key]) {
      return {
        transformedValue:
          textBeforeCursor.slice(0, -1) +
          SYLLABLES[lastChar][key] +
          textAfterCursor,
        newCursorPosition: textBeforeCursor.length,
        isReplacement: true,
      };
    }

    if (["a", "e", "i"].includes(key)) {
      const sadisBase = this.findSadisBase(lastChar);
      if (sadisBase && SYLLABLES[sadisBase]) {
        const doubleVowelKey = key + key;
        if (SYLLABLES[sadisBase][doubleVowelKey]) {
          return {
            transformedValue:
              textBeforeCursor.slice(0, -1) +
              SYLLABLES[sadisBase][doubleVowelKey] +
              textAfterCursor,
            newCursorPosition: textBeforeCursor.length,
            isReplacement: true,
          };
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
}
