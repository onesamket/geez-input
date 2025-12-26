/**
 * @packageDocumentation
 * Geez Input React Components - Phonetic keyboard support for Geez/Ethiopic script in React
 *
 * This module exports React components for typing in Geez (Ethiopic) script
 * using Latin phonetic characters.
 *
 * ## Quick Start
 *
 * ```tsx
 * import { GeezInput, GeezTextArea } from 'geez-input/react'
 *
 * function App() {
 *   return (
 *     <div>
 *       <GeezInput placeholder="Type your name..." />
 *       <GeezTextArea placeholder="Write your story..." />
 *     </div>
 *   )
 * }
 * ```
 */

export { GeezInput } from "./geez-input";
export { GeezTextArea } from "./geez-textarea";
export { useGeez } from "./use-geez";
export type { GeezInputProps } from "./geez-input";
export type { GeezTextAreaProps } from "./geez-textarea";
