# Geez Input Library

A type-safe React library for Geez (Ethiopic) script input with phonetic keyboard support. Write Amharic, Tigrinya, and other Ethiopic languages using Latin characters that automatically transform to Geez script.

## About Geez Script

Geez script (ግዕዝ), also known as Ethiopic script, is an ancient writing system used for [Amharic](https://en.wikipedia.org/wiki/Amharic) and other Ethiopian Semitic languages. It's an alphasyllabary where each character represents a consonant-vowel combination. This library makes it easy to type Geez script using familiar Latin characters with phonetic mappings, supporting labialized forms (wa-series) and all standard syllable transformations.

**📖 Learn more about Amharic and its writing system:** [Wikipedia - Amharic](https://en.wikipedia.org/wiki/Amharic)

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
import { GeezInput, GeezTextArea } from "geez-input";

function App() {
  return (
    <div>
      <GeezInput placeholder="Type in Geez..." />
      <GeezTextArea placeholder="Write longer text..." />
    </div>
  );
}
```

## TypeScript Autocomplete

The components provide full TypeScript autocomplete for all HTML input/textarea attributes:

```tsx
import { GeezInput, GeezTextArea } from "geez-input";
import type { GeezInputProps, GeezTextAreaProps } from "geez-input";

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
        onFocus={(e) => console.log("Focused")}
        onBlur={(e) => console.log("Blurred")}
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
        onFocus={(e) => console.log("Focused")}
        onBlur={(e) => console.log("Blurred")}
        onChange={(e) => console.log(e.target.value)}
      />
    </>
  );
}
```

## Components

### GeezInput

A styled input component with built-in Geez phonetic keyboard support.

**Props:**

- All standard HTML input attributes (`type`, `placeholder`, `value`, `onChange`, `onFocus`, `onBlur`, `required`, `disabled`, `readOnly`, `maxLength`, `minLength`, `pattern`, `autoComplete`, `autoFocus`, `name`, `id`, `aria-*`, `className`, etc.)
- `mode?: "geez" | "latin"` - Input mode: "geez" for phonetic transformation, "latin" for standard input (default: `"geez"`)

```tsx
import { GeezInput } from "geez-input";
import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");

  return (
    <GeezInput
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
      required
      maxLength={50}
      autoComplete="name"
    />
  );
}
```

### GeezTextArea

A styled textarea component for longer text input.

**Props:**

- All standard HTML textarea attributes (`rows`, `cols`, `placeholder`, `value`, `onChange`, `onFocus`, `onBlur`, `required`, `disabled`, `readOnly`, `maxLength`, `minLength`, `wrap`, `spellCheck`, `name`, `id`, `aria-*`, `className`, etc.)
- `mode?: "geez" | "latin"` - Input mode: "geez" for phonetic transformation, "latin" for standard input (default: `"geez"`)

```tsx
import { GeezTextArea } from "geez-input";

function MyForm() {
  return (
    <GeezTextArea
      placeholder="Write your story..."
      rows={5}
      required
      maxLength={500}
    />
  );
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

- `he` → ሀ
- `lu` → ሉ
- `mi` → ሚ
- `sha` → ሻ

### Double Vowels

Type the same vowel twice for alternate forms:

- `ha` → ሃ
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

- `mode?: "geez" | "latin"` - Input mode: "geez" for phonetic transformation, "latin" for standard input (default: `"geez"`)
- `...InputHTMLAttributes` - All standard HTML input attributes (including `className`) with full TypeScript support

#### GeezTextArea

Props:

- `mode?: "geez" | "latin"` - Input mode: "geez" for phonetic transformation, "latin" for standard input (default: `"geez"`)
- `...TextareaHTMLAttributes` - All standard HTML textarea attributes (including `className`) with full TypeScript support

### Type Exports

```tsx
import type { GeezInputProps, GeezTextAreaProps } from "geez-input";

// Use in your own components
type MyInputProps = GeezInputProps & {
  label: string;
};

function MyCustomInput({ label, ...props }: MyInputProps) {
  return (
    <div>
      <label>{label}</label>
      <GeezInput {...props} />
    </div>
  );
}
```

## TypeScript Support

The library is written in TypeScript and provides comprehensive type definitions for all component props.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- React 18 or 19
- TypeScript 5+ (optional)

## Issues & Support

We welcome your feedback and contributions!

- **Found a bug?** [Open an issue](https://github.com/onesamket/geez-input/issues)
- **Have a feature request?** [Create an issue](https://github.com/onesamket/geez-input/issues) and let's discuss it
- **Questions or suggestions?** Feel free to [start a discussion](https://github.com/onesamket/geez-input/issues)

This repository is actively maintained and **open for issues**. We appreciate all contributions, bug reports, and feature requests from the community!

## Contributing

Contributions are welcome! Whether you're fixing bugs, adding features, improving documentation, or adding test coverage, we'd love your help. Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started.

## License

MIT [LICENSE](LICENSE)
