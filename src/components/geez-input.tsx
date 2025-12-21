import type React from "react"
import { useState, forwardRef } from "react"
import { useGeez } from "../use-geez"

/**
 * Props for the GeezInput component
 * Extends all standard HTML input attributes
 */
export interface GeezInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  /**
   * Whether Geez input mode is enabled by default
   * @default true
   */
  defaultGeez?: boolean
  /**
   * Additional CSS classes to apply to the input wrapper
   */
  wrapperClassName?: string
  /**
   * Additional CSS classes to apply to the input field
   * This is combined with the className prop for backward compatibility
   */
  inputClassName?: string
  /**
   * Additional CSS classes to apply to the input field
   * This is an alias for inputClassName for consistency with standard HTML inputs
   */
  className?: string
}

/**
 * Input component with built-in Geez phonetic keyboard support
 *
 * Features:
 * - Press Cmd+Shift+S (or Ctrl+Shift+S) to toggle between Geez and English input modes
 * - Phonetic transformation (type 'hello' → 'ሀልሎ')
 * - Full support for controlled and uncontrolled component patterns
 * - Forward ref support for form libraries
 * - Supports any CSS framework via className props
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
  ({ defaultGeez = true, wrapperClassName, inputClassName, className, onChange, onKeyDown: onKeyDownProp, value, ...props }, ref) => {
    const [geezEnabled, setGeezEnabled] = useState(defaultGeez)

    const { onKeyDown: onKeyDownGeez } = useGeez({ enabled: geezEnabled })

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Ensure onChange is called for controlled components
      if (onChange) {
        onChange(e)
      }
    }

    return (
      <div className={wrapperClassName}>
        <input
          {...props}
          {...(value !== undefined && { value })}
          ref={ref}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className={className || inputClassName}
        />
      </div>
    )
  },
)

GeezInput.displayName = "GeezInput"
