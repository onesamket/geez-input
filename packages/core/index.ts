/**
 * @packageDocumentation
 * Geez Input Core Engine - Phonetic keyboard support for Geez/Ethiopic script
 *
 * This is the core transformation engine that can be used with any framework.
 * It provides the GeezEngine class and related types.
 *
 * ## Quick Start
 *
 * ```ts
 * import { GeezEngine } from 'geez-input/core'
 *
 * const result = GeezEngine.transform('ህ', '', 'a')
 * // result.transformedValue === 'ሀ'
 * ```
 */

export { GeezEngine } from "./engine";
export {
  CONSONANTS,
  SYLLABLES,
  MULTI_CONSONANTS,
  PUNCTUATION,
} from "./mapping";
export type { EngineResult, GeezOptions, TransformStats } from "./types";

// Re-export React components for backward compatibility
export { GeezInput } from "../react/geez-input";
export { GeezTextArea } from "../react/geez-textarea";
export { useGeez } from "../react/use-geez";
export type { GeezInputProps } from "../react/geez-input";
export type { GeezTextAreaProps } from "../react/geez-textarea";
