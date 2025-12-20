import type React from "react"
import { useState, forwardRef } from "react"
import { useGeez } from "../use-geez"

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
  className?: string
}

/**
 * Styled input component with built-in Geez phonetic keyboard support
 *
 * Features:
 * - Toggle button to switch between Geez and English input modes
 * - Phonetic transformation (type 'hello' → 'ሀልሎ')
 * - Full support for controlled and uncontrolled component patterns
 * - Forward ref support for form libraries
 * - Styled with a classic paper and ink aesthetic
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
  ({ defaultGeez = true, className, onChange, onKeyDown: onKeyDownProp, value, ...props }, ref) => {
    const [geezEnabled, setGeezEnabled] = useState(defaultGeez)

    // Prepare input props - only include value if it's defined to avoid controlled/uncontrolled warning
    const inputProps = { ...props }
    if (value !== undefined) {
      inputProps.value = value
    }

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
      <div className="relative group w-full">
        <input
          {...inputProps}
          ref={ref}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className={`w-full bg-paper border-2 border-gold/20 focus:border-crimson outline-none p-4 font-serif text-lg transition-all ${className || ""}`}
        />
        <button
          type="button"
          onClick={() => setGeezEnabled(!geezEnabled)}
          className={`absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md transition-all z-10 font-semibold text-sm ${
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

GeezInput.displayName = "GeezInput"
