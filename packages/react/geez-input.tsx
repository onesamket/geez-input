import type React from "react";
import { forwardRef } from "react";
import { useGeez } from "./use-geez";

/**
 * Props for the GeezInput component
 * Extends all standard HTML input attributes
 */
export interface GeezInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input mode: "geez" for phonetic transformation, "latin" for standard input
   * @default "geez"
   */
  mode?: "geez" | "latin";
}

/**
 * Input component with built-in Geez phonetic keyboard support
 *
 * Features:
 * - Phonetic transformation (type 'hello' → 'ሀልሎ')
 * - Full support for controlled and uncontrolled component patterns
 * - Forward ref support for form libraries
 * - Supports any CSS framework via standard className prop
 *
 * @example
 * \`\`\`tsx
 * // Basic usage
 * <GeezInput placeholder="Type in Geez..." />
 * \`\`\`
 *
 * @example
 * \`\`\`tsx
 * // Controlled component
 * function MyForm() {
 *   const [name, setName] = useState('')
 *   return (
 *     <GeezInput
 *       value={name}
 *       onChange={(e) => setName(e.target.value)}
 *       placeholder="Enter your name"
 *     />
 *   )
 * }
 * \`\`\`
 *
 * @example
 * \`\`\`tsx
 * // With form library (React Hook Form)
 * function MyForm() {
 *   const { register } = useForm()
 *   return <GeezInput {...register('name')} />
 * }
 * \`\`\`
 */
export const GeezInput = forwardRef<HTMLInputElement, GeezInputProps>(
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Only call Geez handler when mode is "geez"
      if (mode === "geez") {
        onKeyDownGeez(e);
      }
      // Call user-provided handler
      if (onKeyDownProp) {
        onKeyDownProp(e);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Ensure onChange is called for controlled components
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <input
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

GeezInput.displayName = "GeezInput";
