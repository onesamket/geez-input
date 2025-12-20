# Geez Library

A type-safe React library for Geez (Ethiopic) script input with phonetic keyboard support. Write Amharic, Tigrinya, and other Ethiopic languages using Latin characters that automatically transform to Geez script.

## Features

- **Type-Safe**: Built with TypeScript for full type safety with comprehensive JSDoc documentation
- **Phonetic Keyboard**: Intuitive Latin-to-Geez transformation following standard conventions
- **Customizable Components**: Pre-styled input and textarea components with toggle support
- **React Hook**: `useGeez` hook for custom implementations
- **Form Library Support**: Works with React Hook Form, Formik, and other form libraries
- **Controlled & Uncontrolled**: Full support for both component patterns

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

## Components

### GeezInput

A styled input component with built-in Geez phonetic keyboard support.

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
    />
  )
}
```

### GeezTextArea

A styled textarea component for longer text input.

```tsx
import { GeezTextArea } from 'geez-input'

function MyForm() {
  return (
    <GeezTextArea
      placeholder="Write your story..."
      rows={5}
    />
  )
}
```

## Hook API

### useGeez

For custom implementations, use the `useGeez` hook:

```tsx
import { useGeez } from 'geez-input'

function CustomInput() {
  const { onKeyDown } = useGeez({
    enabled: true,
    onTransform: (result) => {
      console.log('Transformed:', result)
    }
  })

  return <input onKeyDown={onKeyDown} />
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
- `className?: string` - Additional CSS classes
- `...InputHTMLAttributes` - All standard HTML input attributes

#### GeezTextArea

Props:
- `defaultGeez?: boolean` - Enable Geez mode by default (default: `true`)
- `className?: string` - Additional CSS classes
- `...TextareaHTMLAttributes` - All standard HTML textarea attributes

### Hooks

#### useGeez(options)

Options:
- `enabled?: boolean` - Enable/disable transformation (default: `true`)
- `onTransform?: (result: EngineResult) => void` - Callback after each transformation

Returns:
- `onKeyDown: KeyboardEventHandler` - Event handler for keyboard events

### Engine

#### GeezEngine.transform(textBefore, textAfter, key)

Core transformation method:
- `textBefore: string` - Text before cursor
- `textAfter: string` - Text after cursor
- `key: string` - Key pressed
- Returns: `EngineResult`

## TypeScript Support

The library is written in TypeScript and provides comprehensive type definitions:

```tsx
import type {
  GeezOptions,
  EngineResult,
  PhoneticMap,
  SyllableMap
} from 'geez-input'
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- React 18 or 19
- TypeScript 5+ (optional)

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

MIT  [LICENSE](LICENSE)

