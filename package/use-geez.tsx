import type React from "react";
import { useCallback } from "react";
import { GeezEngine } from "./engine";
import type { GeezOptions } from "./types";

/**
 * React hook for adding Geez phonetic keyboard functionality to input elements
 *
 * This hook intercepts keyboard events and transforms Latin characters to Geez script
 * in real-time. It properly handles controlled and uncontrolled React components,
 * cursor positioning, and form events.
 *
 * @param options - Configuration options for the hook
 * @returns Object containing the onKeyDown event handler
 *
 * @example
 * \`\`\`tsx
 * function MyInput() {
 *   const { onKeyDown } = useGeez({
 *     enabled: true,
 *     onTransform: (result) => console.log('Transformed:', result)
 *   })
 *   return <input onKeyDown={onKeyDown} />
 * }
 * \`\`\`
 *
 * @example
 * \`\`\`tsx
 * // With controlled component
 * function ControlledInput() {
 *   const [value, setValue] = useState('')
 *   const { onKeyDown } = useGeez()
 *
 *   return (
 *     <input
 *       value={value}
 *       onChange={(e) => setValue(e.target.value)}
 *       onKeyDown={onKeyDown}
 *     />
 *   )
 * }
 * \`\`\`
 */
export const useGeez = (options: GeezOptions = {}) => {
  const { onTransform } = options;

  /**
   * Keyboard event handler that transforms input to Geez script
   *
   * This handler:
   * - Allows special keys (arrows, backspace, etc.) to work normally
   * - Allows keyboard shortcuts (Ctrl+C, Cmd+V, etc.) to work normally
   * - Transforms single character inputs using the Geez engine
   * - Updates both controlled and uncontrolled components
   * - Maintains proper cursor position after transformation
   * - Triggers React's synthetic events for form validation
   *
   * @param e - React keyboard event from input or textarea
   */
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
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

      const target = e.currentTarget;
      const { selectionStart, selectionEnd, value } = target;

      const before = value.substring(0, selectionStart || 0);
      const after = value.substring(selectionEnd || 0);

      const result = GeezEngine.transform(before, after, e.key);

      // Set the value directly on the element to bypass React's controlled component restrictions
      // Use Object.defineProperty to avoid "Illegal invocation" error
      const valueDescriptor = Object.getOwnPropertyDescriptor(
        target.constructor.prototype,
        "value"
      );

      if (valueDescriptor && valueDescriptor.set) {
        // Bind the setter to the target element
        const setter = valueDescriptor.set.bind(target);
        setter(result.transformedValue);
      } else {
        // Fallback: set value directly (works for uncontrolled components)
        (target as any).value = result.transformedValue;
      }

      // Create a proper InputEvent that React will recognize
      // This ensures React's onChange handlers are called for controlled components
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

      // Dispatch the input event - React will handle this for both controlled and uncontrolled components
      // This triggers onChange handlers and form validation
      target.dispatchEvent(inputEvent);

      // Also dispatch a change event for form libraries that listen to it
      const changeEvent = new Event("change", {
        bubbles: true,
        cancelable: true,
      });
      target.dispatchEvent(changeEvent);

      // Set cursor position - use requestAnimationFrame to ensure it happens after React processes the event
      requestAnimationFrame(() => {
        // Check if the element is still focused and valid
        if (document.activeElement === target) {
          try {
            target.setSelectionRange(
              result.newCursorPosition,
              result.newCursorPosition
            );
          } catch (err) {
            // Ignore errors if element is not focusable or selection fails
          }
        }
      });

      if (onTransform) onTransform(result);
    },
    [onTransform]
  );

  return { onKeyDown };
};
