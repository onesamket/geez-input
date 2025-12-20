import type React from "react"
import { useState, forwardRef } from "react"
import { useGeez } from "../use-geez"
import { cn } from "./utils"
import "./geez-input.css"

/**
 * Props for the GeezInput component
 * Extends all standard HTML input attributes
 */
export interface GeezInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
   */
  inputClassName?: string
  /**
   * Additional CSS classes to apply to the toggle button
   */
  buttonClassName?: string
}

/**
 * Styled input component with built-in Geez phonetic keyboard support
 *
 * Features:
 * - Toggle button to switch between Geez and English input modes
 * - Phonetic transformation (type 'hello' → 'ሀልሎ')
 * - Full support for controlled and uncontrolled component patterns
 * - Forward ref support for form libraries
 * - Styled with CSS classes that can be customized via className props
 * - Supports Tailwind CSS, CSS modules, or any CSS framework
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
 *
 * @example
 * \`\`\`tsx
 * // Custom styling with Tailwind CSS
 * <GeezInput
 *   wrapperClassName="mb-4"
 *   inputClassName="rounded-lg shadow-md"
 *   buttonClassName="hover:opacity-80"
 *   placeholder="Type here..."
 * />
 * \`\`\`
 *
 * @example
 * \`\`\`tsx
 * // Custom styling with CSS classes
 * <GeezInput
 *   wrapperClassName="my-custom-wrapper"
 *   inputClassName="my-custom-input"
 *   buttonClassName="my-custom-button"
 *   placeholder="Type here..."
 * />
 * \`\`\`
 */
export const GeezInput = forwardRef<HTMLInputElement, GeezInputProps>(
  ({ defaultGeez = true, wrapperClassName, inputClassName, buttonClassName, className, onChange, onKeyDown: onKeyDownProp, value, ...props }, ref) => {
    const [geezEnabled, setGeezEnabled] = useState(defaultGeez)

    const { onKeyDown: onKeyDownGeez } = useGeez({ enabled: geezEnabled })

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
      <div className={cn("geez-input-wrapper", wrapperClassName)}>
        <input
          {...props}
          {...(value !== undefined && { value })}
          ref={ref}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className={cn("geez-input-field", className, inputClassName)}
        />
        <button
          type="button"
          onClick={() => setGeezEnabled(!geezEnabled)}
          className={cn(
            "geez-input-toggle",
            geezEnabled ? "geez-input-toggle--active" : "geez-input-toggle--inactive",
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

GeezInput.displayName = "GeezInput"
