/**
 * @packageDocumentation
 * Geez Input Library - Phonetic keyboard support for Geez/Ethiopic script in React
 *
 * This library provides React components for typing in Geez (Ethiopic) script
 * using Latin phonetic characters. It supports Amharic, Tigrinya, and other languages
 * written in the Geez script.
 *
 * ## Quick Start
 *
 * \`\`\`tsx
 * import { GeezInput, GeezTextArea } from 'geez-input'
 *
 * function App() {
 *   return (
 *     <div>
 *       <GeezInput placeholder="Type your name..." />
 *       <GeezTextArea placeholder="Write your story..." />
 *     </div>
 *   )
 * }
 * \`\`\`
 *
 * ## Main Exports
 *
 * ### Components
 * - {@link GeezInput} - Styled input with Geez keyboard
 * - {@link GeezTextArea} - Styled textarea with Geez keyboard
 *
 * ### Engine
 * - {@link GeezEngine} - Core transformation engine for integrating with other frameworks
 */

export * from "../react/geez-input";
export * from "../react/geez-textarea";
export { GeezEngine } from "./engine";
export type { EngineResult, GeezOptions, TransformStats } from "./types";
export {
  CONSONANTS,
  SYLLABLES,
  MULTI_CONSONANTS,
  PUNCTUATION,
} from "./mapping";
