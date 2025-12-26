/**
 * @packageDocumentation
 * Geez Input Library for Svelte - Phonetic keyboard support for Geez/Ethiopic script
 *
 * This library provides Svelte components for typing in Geez (Ethiopic) script
 * using Latin phonetic characters. It supports Amharic, Tigrinya, and other languages
 * written in the Geez script.
 *
 * ## Quick Start
 *
 * ```svelte
 * <script>
 *   import { GeezInput, GeezTextArea } from 'geez-input-svelte'
 *   let name = ''
 *   let story = ''
 * </script>
 *
 * <GeezInput bind:value={name} placeholder="Type your name..." />
 * <GeezTextArea bind:value={story} placeholder="Write your story..." />
 * ```
 */

export { default as GeezInput } from "./GeezInput.svelte";
export { default as GeezTextArea } from "./GeezTextArea.svelte";
export { useGeez } from "./use-geez";

