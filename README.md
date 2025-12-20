# Geez Library

A type-safe React library for Geez (Ethiopic) script input with phonetic keyboard support. Write Amharic, Tigrinya, and other Ethiopic languages using Latin characters that automatically transform to Geez script.

## Features

- **Fully Type-Safe**: Built with TypeScript for complete IntelliSense support and autocomplete
- **All HTML Attributes**: Full support for all native input and textarea attributes
- **Phonetic Keyboard**: Intuitive Latin-to-Geez transformation following standard conventions
- **Customizable Components**: Pre-styled input and textarea components with toggle support
- **Form Library Support**: Works with React Hook Form, Formik, and other form libraries
- **Controlled & Uncontrolled**: Full support for both component patterns
- **ForwardRef Support**: Seamless integration with form libraries and ref forwarding

## Installation

```bash
npm install geez-input
```

## Quick Start

```tsx
import { GeezInput, GeezTextArea } from 'geez-input'

function App() {
  return (
    <div>
      <GeezInput placeholder="Type in Geez..." />
      <GeezTextArea placeholder="Write longer text..." />
    </div>
  )
}
```

## TypeScript Autocomplete

The components provide full TypeScript autocomplete for all HTML input/textarea attributes:

```tsx
import { GeezInput, GeezTextArea } from 'geez-input'
import type { GeezInputProps, GeezTextAreaProps } from 'geez-input'

function MyForm() {
  return (
    <>
      {/* All input attributes are fully typed with autocomplete */}
      <GeezInput
        type="text"
        placeholder="Your name"
        required
        maxLength={50}
        autoComplete="name"
        autoFocus
        disabled={false}
        readOnly={false}
        name="fullName"
        id="name-input"
        aria-label="Full name input"
        aria-required="true"
        onFocus={(e) => console.log('Focused')}
        onBlur={(e) => console.log('Blurred')}
        onChange={(e) => console.log(e.target.value)}
      />

      {/* All textarea attributes are fully typed with autocomplete */}
      <GeezTextArea
        rows={5}
        cols={50}
        placeholder="Your story"
        required
        maxLength={500}
        wrap="soft"
        spellCheck={false}
        name="story"
        id="story-textarea"
        aria-label="Story textarea"
        onFocus={(e) => console.log('Focused')}
        onBlur={(e) => console.log('Blurred')}
        onChange={(e) => console.log(e.target.value)}
      />
    </>
  )
}
```

## Components

### GeezInput

A styled input component with built-in Geez phonetic keyboard support.

**Props:**
- All standard HTML input attributes (`type`, `placeholder`, `value`, `onChange`, `onFocus`, `onBlur`, `required`, `disabled`, `readOnly`, `maxLength`, `minLength`, `pattern`, `autoComplete`, `autoFocus`, `name`, `id`, `aria-*`, etc.)
- `defaultGeez?: boolean` - Enable Geez mode by default (default: `true`)
- `className?: string` - CSS classes for the input field
- `wrapperClassName?: string` - CSS classes for the wrapper div
- `inputClassName?: string` - Additional CSS classes for the input field
- `buttonClassName?: string` - CSS classes for the toggle button

```tsx
import { GeezInput } from 'geez-input'
import { useState } from 'react'

function MyForm() {
  const [name, setName] = useState('')

  return (
    <GeezInput
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
      required
      maxLength={50}
      autoComplete="name"
    />
  )
}
```

### GeezTextArea

A styled textarea component for longer text input.

**Props:**
- All standard HTML textarea attributes (`rows`, `cols`, `placeholder`, `value`, `onChange`, `onFocus`, `onBlur`, `required`, `disabled`, `readOnly`, `maxLength`, `minLength`, `wrap`, `spellCheck`, `name`, `id`, `aria-*`, etc.)
- `defaultGeez?: boolean` - Enable Geez mode by default (default: `true`)
- `className?: string` - CSS classes for the textarea field
- `wrapperClassName?: string` - CSS classes for the wrapper div
- `textareaClassName?: string` - Additional CSS classes for the textarea field
- `buttonClassName?: string` - CSS classes for the toggle button

```tsx
import { GeezTextArea } from 'geez-input'

function MyForm() {
  return (
    <GeezTextArea
      placeholder="Write your story..."
      rows={5}
      required
      maxLength={500}
    />
  )
}
```

## Phonetic Guide

The library uses intuitive phonetic mappings:

### Consonants
- `h` → ህ
- `l` → ል
- `m` → ም
- `sh` → ሽ
- `ch` → ች

### Syllables
Type a consonant followed by a vowel:
- `ha` → ሀ
- `lu` → ሉ
- `mi` → ሚ
- `sha` → ሻ

### Double Vowels
Type the same vowel twice for alternate forms:
- `haa` → ሃ
- `lee` → ሌ

### Punctuation
- `:` → ፡ (word separator)
- `::` → ። (sentence ending)
- `,` → ፣

## Examples

Type phonetically to get Geez text:

- `selam` → ስላም (hello)
- `ethiopia` → ኢትዮጵያ (Ethiopia)
- `tena yistilign` → ጤና ይስጥልኝ (greetings)

## API Reference

### Components

#### GeezInput

Props:
- `defaultGeez?: boolean` - Enable Geez mode by default (default: `true`)
- `className?: string` - Additional CSS classes for the input field
- `wrapperClassName?: string` - Additional CSS classes for the wrapper
- `inputClassName?: string` - Additional CSS classes for the input field
- `buttonClassName?: string` - Additional CSS classes for the toggle button
- `...InputHTMLAttributes` - All standard HTML input attributes with full TypeScript support

#### GeezTextArea

Props:
- `defaultGeez?: boolean` - Enable Geez mode by default (default: `true`)
- `className?: string` - Additional CSS classes for the textarea field
- `wrapperClassName?: string` - Additional CSS classes for the wrapper
- `textareaClassName?: string` - Additional CSS classes for the textarea field
- `buttonClassName?: string` - Additional CSS classes for the toggle button
- `...TextareaHTMLAttributes` - All standard HTML textarea attributes with full TypeScript support

### Type Exports

```tsx
import type { 
  GeezInputProps, 
  GeezTextAreaProps 
} from 'geez-input'

// Use in your own components
type MyInputProps = GeezInputProps & {
  label: string
}

function MyCustomInput({ label, ...props }: MyInputProps) {
  return (
    <div>
      <label>{label}</label>
      <GeezInput {...props} />
    </div>
  )
}
```

## TypeScript Support

The library is written in TypeScript and provides comprehensive type definitions for all component props.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- React 18 or 19
- TypeScript 5+ (optional)

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

MIT  [LICENSE](LICENSE)

