import type React from "react"
import { useState, forwardRef } from "react"
import { useGeez } from "../use-geez"

/**
 * Props for the GeezTextArea component
 * Extends all standard HTML textarea attributes
 */
export interface GeezTextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
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
   * This is combined with the className prop for backward compatibility
   */
  textareaClassName?: string
  /**
   * Additional CSS classes to apply to the textarea field
   * This is an alias for textareaClassName for consistency with standard HTML textareas
   */
  className?: string
}

/**
 * Textarea component with built-in Geez phonetic keyboard support
 *
 * Features:
 * - Press Cmd+Shift+S (or Ctrl+Shift+S) to toggle between Geez and English input modes
 * - Phonetic transformation for longer text
 * - Full support for controlled and uncontrolled component patterns
 * - Forward ref support for form libraries
 * - Supports any CSS framework via className props
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
 */
export const GeezTextArea = forwardRef<HTMLTextAreaElement, GeezTextAreaProps>(
  ({ defaultGeez = true, wrapperClassName, textareaClassName, className, onChange, onKeyDown: onKeyDownProp, value, ...props }, ref) => {
    const [geezEnabled, setGeezEnabled] = useState(defaultGeez)

    const { onKeyDown: onKeyDownGeez } = useGeez({ enabled: geezEnabled })

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      // Handle Cmd+Shift+S (or Ctrl+Shift+S on Windows/Linux) to toggle Geez mode
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'S') {
        e.preventDefault()
        setGeezEnabled(prev => !prev)
        return
      }

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
      <div className={wrapperClassName}>
        <textarea
          {...props}
          {...(value !== undefined && { value })}
          ref={ref}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className={className || textareaClassName}
        />
      </div>
    )
  },
)

GeezTextArea.displayName = "GeezTextArea"
