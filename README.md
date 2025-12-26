# Geez Input Library

A type-safe, framework-agnostic library for Geez (Ethiopic) script input with phonetic keyboard support. Write Amharic, Tigrinya, and other Ethiopic languages using Latin characters that automatically transform to Geez script.

## About Geez Script

Geez script (ግዕዝ), also known as Ethiopic script, is an ancient writing system used for [Amharic](https://en.wikipedia.org/wiki/Amharic) and other Ethiopian Semitic languages. It's an alphasyllabary where each character represents a consonant-vowel combination. This library makes it easy to type Geez script using familiar Latin characters with phonetic mappings, supporting labialized forms (wa-series) and all standard syllable transformations.

**📖 Learn more about Amharic and its writing system:** [Wikipedia - Amharic](https://en.wikipedia.org/wiki/Amharic)

## Architecture

The library is split into two packages:

- **`geez-input/core`** - Framework-agnostic core engine for phonetic transformation
- **`geez-input/react`** - React components and hooks built on top of the core

This architecture allows you to:
- Use the core engine with any framework (Vue, Svelte, Angular, vanilla JS, etc.)
- Use ready-made React components for quick integration
- Build custom React integrations by combining the core engine with your own state management

## Features

- **Framework-Agnostic Core**: Use the transformation engine with any JavaScript framework
- **React Components**: Ready-to-use React components with full TypeScript support
- **Fully Type-Safe**: Built with TypeScript for complete IntelliSense support and autocomplete
- **All HTML Attributes**: Full support for all native input and textarea attributes
- **Phonetic Keyboard**: Intuitive Latin-to-Geez transformation following standard conventions
- **Form Library Support**: Works with React Hook Form, Formik, and other form libraries
- **Controlled & Uncontrolled**: Full support for both component patterns
- **ForwardRef Support**: Seamless integration with form libraries and ref forwarding

## Installation

```bash
npm install geez-input
```

## Framework Support

### React ✅

React support is available now with ready-to-use components and hooks.

```tsx
import { GeezInput, GeezTextArea } from "geez-input/react";

function App() {
  return (
    <div>
      <GeezInput placeholder="Type in Geez..." />
      <GeezTextArea placeholder="Write longer text..." />
    </div>
  );
}
```

[View React Documentation →](#react)

### Svelte 🚧

Svelte support is coming soon! You can use the core engine directly in the meantime.

### Angular 🚧

Angular support is coming soon! You can use the core engine directly in the meantime.

### Vue 🚧

Vue support is coming soon! You can use the core engine directly in the meantime.

## Quick Start

### Using React Components

```tsx
import { GeezInput, GeezTextArea } from "geez-input/react";

function App() {
  return (
    <div>
      <GeezInput placeholder="Type in Geez..." />
      <GeezTextArea placeholder="Write longer text..." />
    </div>
  );
}
```

### Using the Core Engine

For other frameworks or custom implementations, use the core engine:

```ts
import { GeezEngine } from "geez-input/core";

const result = GeezEngine.transform("h", "", "a");
// result.transformedValue === "ሀ"
```

[View Core Engine Documentation →](#core-engine)

## React

### TypeScript Autocomplete

The components provide full TypeScript autocomplete for all HTML input/textarea attributes:

```tsx
import { GeezInput, GeezTextArea } from "geez-input/react";
import type { GeezInputProps, GeezTextAreaProps } from "geez-input/react";

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

### Components

#### GeezInput

A styled input component with built-in Geez phonetic keyboard support.

**Props:**

- All standard HTML input attributes (`type`, `placeholder`, `value`, `onChange`, `onFocus`, `onBlur`, `required`, `disabled`, `readOnly`, `maxLength`, `minLength`, `pattern`, `autoComplete`, `autoFocus`, `name`, `id`, `aria-*`, `className`, etc.)
- `mode?: "geez" | "latin"` - Input mode: "geez" for phonetic transformation, "latin" for standard input (default: `"geez"`)

```tsx
import { GeezInput } from "geez-input/react";
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

#### GeezTextArea

A styled textarea component for longer text input.

**Props:**

- All standard HTML textarea attributes (`rows`, `cols`, `placeholder`, `value`, `onChange`, `onFocus`, `onBlur`, `required`, `disabled`, `readOnly`, `maxLength`, `minLength`, `wrap`, `spellCheck`, `name`, `id`, `aria-*`, `className`, etc.)
- `mode?: "geez" | "latin"` - Input mode: "geez" for phonetic transformation, "latin" for standard input (default: `"geez"`)

```tsx
import { GeezTextArea } from "geez-input/react";

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

### React Hook

For custom implementations, use the `useGeez` hook:

```tsx
import { useGeez } from "geez-input/react";

function CustomInput() {
  const { onKeyDown } = useGeez({
    onTransform: (result) => {
      console.log("Transformed:", result.transformedValue);
    },
  });

  return <input onKeyDown={onKeyDown} />;
}
```

## Core Engine

The core engine is framework-agnostic and can be used with any JavaScript framework or vanilla JavaScript.

### Basic Usage

```ts
import { GeezEngine } from "geez-input/core";

// Transform a character
const result = GeezEngine.transform("h", "", "a");
// result.transformedValue === "ሀ"
// result.newCursorPosition === 1
// result.isReplacement === true
```

### Integration Example (Vanilla JavaScript)

```ts
import { GeezEngine } from "geez-input/core";

const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
  // Skip special keys
  if (e.key.length !== 1 || e.ctrlKey || e.metaKey) return;

  e.preventDefault();

  const target = e.target as HTMLInputElement;
  const { selectionStart, selectionEnd, value } = target;

  const before = value.substring(0, selectionStart || 0);
  const after = value.substring(selectionEnd || 0);

  const result = GeezEngine.transform(before, after, e.key);

  target.value = result.transformedValue;
  target.setSelectionRange(result.newCursorPosition, result.newCursorPosition);
});
```

### API

#### `GeezEngine.transform(textBeforeCursor, textAfterCursor, key)`

Transforms input based on a new key press.

**Parameters:**

- `textBeforeCursor: string` - Text content before the cursor position
- `textAfterCursor: string` - Text content after the cursor position
- `key: string` - The character key that was pressed

**Returns:**

```ts
{
  transformedValue: string;  // The complete transformed text value
  newCursorPosition: number; // The new cursor position after transformation
  isReplacement: boolean;    // Whether this transformation replaced existing characters
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

## Type Exports

### React

```tsx
import type { GeezInputProps, GeezTextAreaProps } from "geez-input/react";

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

### Core

```ts
import type { EngineResult, GeezOptions } from "geez-input/core";

// Use in your custom implementations
function handleTransform(result: EngineResult) {
  console.log("Transformed:", result.transformedValue);
}
```

## TypeScript Support

The library is written in TypeScript and provides comprehensive type definitions for all component props.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- React 18 or 19 (for React components)
- TypeScript 5+ (optional but recommended)

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
