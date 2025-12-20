/**
 * @packageDocumentation
 * Geez Input Library - Phonetic keyboard support for Geez/Ethiopic script in React
 *
 * This library provides React components and hooks for typing in Geez (Ethiopic) script
 * using Latin phonetic characters. It supports Amharic, Tigrinya, and other languages
 * written in the Geez script.
 *
 * ## Quick Start
 *
 * \`\`\`tsx
 * import { GeezInput, GeezTextArea, useGeez } from 'geez-input'
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
 * ### Hooks
 * - {@link useGeez} - Hook for custom implementations
 *
 * ### Engine
 * - {@link GeezEngine} - Core transformation engine
 *
 * ### Types
 * - {@link GeezOptions} - Configuration options
 * - {@link EngineResult} - Transformation result
 * - {@link PhoneticMap} - Character mapping type
 * - {@link SyllableMap} - Syllable mapping type
 *
 * ### Mappings
 * - {@link CONSONANTS} - Base consonant mappings
 * - {@link SYLLABLES} - Syllable form mappings
 * - {@link PUNCTUATION} - Punctuation mappings
 * - {@link MULTI_CONSONANTS} - Multi-character consonants
 */

export * from "./engine"
export * from "./use-geez"
export * from "./types"
export * from "./mapping"
export * from "./components/geez-input"
export * from "./components/geez-textarea"
