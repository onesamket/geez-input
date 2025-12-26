/**
 * Phonetic character mapping from Latin to Geez script
 * @example
 * ```ts
 * const mapping: PhoneticMap = { 'h': 'ህ', 'l': 'ል' }
 * ```
 */
export type PhoneticMap = Record<string, string>;

/**
 * Syllable mapping with vowel modifications for each consonant
 * @example
 * ```ts
 * const syllables: SyllableMap = {
 *   'ህ': { 'a': 'ሀ', 'u': 'ሁ', 'i': 'ሂ' }
 * }
 * ```
 */
export type SyllableMap = Record<string, Record<string, string>>;

/**
 * Result of a character transformation operation
 */
export interface EngineResult {
  /** The complete transformed text value */
  transformedValue: string;
  /** The new cursor position after transformation */
  newCursorPosition: number;
  /** Whether this transformation replaced existing characters */
  isReplacement: boolean;
}

/**
 * Keyboard configuration settings
 * @deprecated Not currently used in the library but will be used in the future
 */
export interface KeyboardConfig {
  /** The phonetic standard to use */
  mode: "geez" | "latin";
}

/**
 * Configuration options for the useGeez hook
 */
export interface GeezOptions {
  /**
   * Callback function triggered after each transformation
   * @param result - The result of the transformation
   */
  onTransform?: (result: EngineResult) => void;
}

/**
 * Geez transformation statistics for a single operation
 */
export interface TransformStats {
  /** Input character that triggered the transformation */
  inputChar: string;
  /** Output character(s) after transformation */
  outputChar: string;
  /** Type of transformation performed */
  transformType:
    | "consonant"
    | "syllable"
    | "punctuation"
    | "multi-consonant"
    | "double-vowel"
    | "passthrough";
}
