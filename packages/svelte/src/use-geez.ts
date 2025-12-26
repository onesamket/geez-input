import type { GeezOptions } from "geez-input/core";
import { GeezEngine } from "geez-input/core";

/**
 * Svelte action for adding Geez phonetic keyboard functionality to input elements
 *
 * This action intercepts keyboard events and transforms Latin characters to Geez script
 * in real-time. It properly handles Svelte's reactivity, cursor positioning, and form events.
 *
 * @param node - The input or textarea element
 * @param options - Configuration options
 * @returns Action cleanup function
 *
 * @example
 * ```svelte
 * <script>
 *   import { useGeez } from 'geez-input-svelte'
 *   let value = ''
 * </script>
 *
 * <input use:useGeez={{ mode: 'geez' }} bind:value />
 * ```
 */
export function useGeez(
  node: HTMLInputElement | HTMLTextAreaElement,
  options: GeezOptions & { mode?: "geez" | "latin" } = {}
) {
  const { mode = "geez", onTransform } = options;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (mode !== "geez") return;

    // Allow special keys to work normally (navigation, editing, etc.)
    const specialKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
      "Tab",
      "Enter",
      "Escape",
      "PageUp",
      "PageDown",
    ];

    if (specialKeys.includes(e.key)) {
      return;
    }

    // Allow Ctrl/Cmd combinations (copy, paste, select all, etc.)
    if (e.ctrlKey || e.metaKey) {
      return;
    }

    // Only process single character keys that aren't modified
    if (e.key.length !== 1 || e.altKey) return;

    e.preventDefault();

    const { selectionStart, selectionEnd, value } = node;

    const before = value.substring(0, selectionStart || 0);
    const after = value.substring(selectionEnd || 0);

    const result = GeezEngine.transform(before, after, e.key);

    // Set the value directly on the element
    const valueDescriptor = Object.getOwnPropertyDescriptor(
      node.constructor.prototype,
      "value"
    );

    if (valueDescriptor && valueDescriptor.set) {
      const setter = valueDescriptor.set.bind(node);
      setter(result.transformedValue);
    } else {
      (node as any).value = result.transformedValue;
    }

    // Create a proper InputEvent that Svelte will recognize
    let inputEvent: Event;
    if (typeof InputEvent !== "undefined") {
      inputEvent = new InputEvent("input", {
        bubbles: true,
        cancelable: true,
        inputType: "insertText",
        data: e.key,
      });
    } else {
      inputEvent = new Event("input", { bubbles: true, cancelable: true });
    }

    // Dispatch the input event - Svelte will handle this for bind:value
    node.dispatchEvent(inputEvent);

    // Also dispatch a change event for form libraries that listen to it
    const changeEvent = new Event("change", {
      bubbles: true,
      cancelable: true,
    });
    node.dispatchEvent(changeEvent);

    // Set cursor position - use requestAnimationFrame to ensure it happens after Svelte processes the event
    requestAnimationFrame(() => {
      if (document.activeElement === node) {
        try {
          node.setSelectionRange(
            result.newCursorPosition,
            result.newCursorPosition
          );
        } catch (err) {
          // Ignore errors if element is not focusable or selection fails
        }
      }
    });

    if (onTransform) onTransform(result);
  };

  node.addEventListener("keydown", handleKeyDown as EventListener);

  return {
    update(newOptions: GeezOptions & { mode?: "geez" | "latin" }) {
      Object.assign(options, newOptions);
    },
    destroy() {
      node.removeEventListener("keydown", handleKeyDown as EventListener);
    },
  };
}
