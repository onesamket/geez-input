import type React from "react"
import { useState, forwardRef } from "react"
import { useGeez } from "../use-geez"

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
  className?: string
}

/**
 * Styled textarea component with built-in Geez phonetic keyboard support
 *
 * Features:
 * - Toggle button to switch between Geez and English input modes
 * - Phonetic transformation for longer text
 * - Full support for controlled and uncontrolled component patterns
 * - Forward ref support for form libraries
 * - Styled with a classic paper and ink aesthetic
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
 */
export const GeezTextArea = forwardRef<HTMLTextAreaElement, GeezTextAreaProps>(
  ({ defaultGeez = true, className, onChange, onKeyDown: onKeyDownProp, value, ...props }, ref) => {
    const [geezEnabled, setGeezEnabled] = useState(defaultGeez)

    // Prepare textarea props - only include value if it's defined to avoid controlled/uncontrolled warning
    const textareaProps = { ...props }
    if (value !== undefined) {
      textareaProps.value = value
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
      <div className={`relative group w-full ${className || ""}`}>
        <textarea
          {...textareaProps}
          ref={ref}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className={`w-full bg-paper border-2 border-gold/20 focus:border-crimson outline-none p-6 font-serif text-lg leading-relaxed transition-all min-h-[150px] ${className || ""}`}
        />
        <button
          type="button"
          onClick={() => setGeezEnabled(!geezEnabled)}
          className={`absolute right-4 top-4 px-3 py-1.5 rounded-md transition-all z-10 font-semibold text-sm ${
            geezEnabled ? "bg-crimson text-white" : "bg-gold/10 text-gold"
          }`}
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
