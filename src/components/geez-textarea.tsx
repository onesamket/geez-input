import type React from "react"
import { useState, forwardRef } from "react"
import { useGeez } from "../use-geez"
import { cn } from "./utils"
import "./geez-textarea.css"

/**
 * Props for the GeezTextArea component
 * Extends all standard HTML textarea attributes
 */
export interface GeezTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Whether Geez input mode is enabled by default
   * @default true
   */
  defaultGeez?: boolean
  /**
   * Additional CSS classes to apply to the textarea wrapper
   */
  wrapperClassName?: string
  /**
   * Additional CSS classes to apply to the textarea field
   */
  textareaClassName?: string
  /**
   * Additional CSS classes to apply to the toggle button
   */
  buttonClassName?: string
}

/**
 * Styled textarea component with built-in Geez phonetic keyboard support
 *
 * Features:
 * - Toggle button to switch between Geez and English input modes
 * - Phonetic transformation for longer text
 * - Full support for controlled and uncontrolled component patterns
 * - Forward ref support for form libraries
 * - Styled with CSS classes that can be customized via className props
 * - Supports Tailwind CSS, CSS modules, or any CSS framework
 * - Minimum height of 150px for comfortable writing
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
 * // Start with English mode
 * <GeezTextArea defaultGeez={false} placeholder="Type here..." />
 * \`\`\`
 *
 * @example
 * \`\`\`tsx
 * // Custom styling with Tailwind CSS
 * <GeezTextArea
 *   wrapperClassName="mb-4"
 *   textareaClassName="rounded-lg shadow-md resize-none"
 *   buttonClassName="hover:opacity-80"
 *   placeholder="Write here..."
 * />
 * \`\`\`
 *
 * @example
 * \`\`\`tsx
 * // Custom styling with CSS classes
 * <GeezTextArea
 *   wrapperClassName="my-custom-wrapper"
 *   textareaClassName="my-custom-textarea"
 *   buttonClassName="my-custom-button"
 *   placeholder="Write here..."
 * />
 * \`\`\`
 */
export const GeezTextArea = forwardRef<HTMLTextAreaElement, GeezTextAreaProps>(
  ({ defaultGeez = true, wrapperClassName, textareaClassName, buttonClassName, className, onChange, onKeyDown: onKeyDownProp, value, ...props }, ref) => {
    const [geezEnabled, setGeezEnabled] = useState(defaultGeez)

    // Prepare textarea props - only include value if it's defined to avoid controlled/uncontrolled warning
    // className is already extracted in function parameters and will be merged separately
    const finalTextareaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement> = {
      ...props,
      ...(value !== undefined && { value }),
    }

    const { onKeyDown: onKeyDownGeez } = useGeez({ enabled: geezEnabled })

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      // Call the Geez handler first
      onKeyDownGeez(e)
      // Then call any user-provided handler
      if (onKeyDownProp) {
        onKeyDownProp(e)
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      // Ensure onChange is called for controlled components
      if (onChange) {
        onChange(e)
      }
    }

    return (
      <div className={cn("geez-textarea-wrapper", wrapperClassName)}>
        <textarea
          {...finalTextareaProps}
          ref={ref}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className={cn("geez-textarea-field", className, textareaClassName)}
        />
        <button
          type="button"
          onClick={() => setGeezEnabled(!geezEnabled)}
          className={cn(
            "geez-textarea-toggle",
            geezEnabled ? "geez-textarea-toggle--active" : "geez-textarea-toggle--inactive",
            buttonClassName
          )}
          title={geezEnabled ? "Switch to English" : "Switch to Ge'ez"}
          tabIndex={-1}
        >
          {geezEnabled ? "አማ" : "EN"}
        </button>
      </div>
    )
  },
)

GeezTextArea.displayName = "GeezTextArea"
