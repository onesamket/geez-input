import type React from "react";
import { forwardRef } from "react";
import { useGeez } from "../use-geez";

/**
 * Props for the GeezTextArea component
 * Extends all standard HTML textarea attributes
 */
export interface GeezTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Input mode: "geez" for phonetic transformation, "latin" for standard input
   * @default "geez"
   */
  mode?: "geez" | "latin";
}

/**
 * Textarea component with built-in Geez phonetic keyboard support
 *
 * Features:
 * - Phonetic transformation for longer text
 * - Full support for controlled and uncontrolled component patterns
 * - Forward ref support for form libraries
 * - Supports any CSS framework via standard className prop
 *
 * @example
 * \`\`\`tsx
 * // Basic usage
 * <GeezTextArea placeholder="Write your story..." rows={5} />
 * \`\`\`
 *
 * @example
 * \`\`\`tsx
 * // Controlled component
 * function MyForm() {
 *   const [content, setContent] = useState('')
 *   return (
 *     <GeezTextArea
 *       value={content}
 *       onChange={(e) => setContent(e.target.value)}
 *       placeholder="Enter your text"
 *     />
 *   )
 * }
 * \`\`\`
 *
 * @example
 * \`\`\`tsx
 * // Start with Latin mode
 * <GeezTextArea mode="latin" placeholder="Type here..." />
 * \`\`\`
 */
export const GeezTextArea = forwardRef<HTMLTextAreaElement, GeezTextAreaProps>(
  (
    {
      mode = "geez",
      className,
      onChange,
      onKeyDown: onKeyDownProp,
      value,
      ...props
    },
    ref
  ) => {
    const { onKeyDown: onKeyDownGeez } = useGeez();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      // Only call Geez handler when mode is "geez"
      if (mode === "geez") {
        onKeyDownGeez(e);
      }
      // Call user-provided handler
      if (onKeyDownProp) {
        onKeyDownProp(e);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      // Ensure onChange is called for controlled components
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <textarea
        {...props}
        {...(value !== undefined && { value })}
        ref={ref}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        className={className}
      />
    );
  }
);

GeezTextArea.displayName = "GeezTextArea";
