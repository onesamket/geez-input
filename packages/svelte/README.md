# Geez Input Svelte

A type-safe Svelte library for Geez (Ethiopic) script input with phonetic keyboard support. Write Amharic, Tigrinya, and other Ethiopic languages using Latin characters that automatically transform to Geez script.

## Installation

```bash
npm install geez-input-svelte geez-input
```

**Note:** `geez-input` is a peer dependency required for the core engine.

## Quick Start

```svelte
<script>
  import { GeezInput, GeezTextArea } from 'geez-input-svelte'
  let name = ''
  let story = ''
</script>

<GeezInput bind:value={name} placeholder="Type in Geez..." />
<GeezTextArea bind:value={story} placeholder="Write longer text..." />
```

## Components

### GeezInput

A Svelte input component with built-in Geez phonetic keyboard support.

**Props:**

- All standard HTML input attributes
- `mode?: "geez" | "latin"` - Input mode (default: `"geez"`)
- `value?: string | number | null` - bind:value value
- `className?: string` - CSS class name
- `geezOptions?: GeezOptions` - Options for the Geez engine

### GeezTextArea

A Svelte textarea component with built-in Geez phonetic keyboard support.

**Props:**

- All standard HTML textarea attributes
- `mode?: "geez" | "latin"` - Input mode (default: `"geez"`)
- `value?: string | number | null` - bind:value value
- `className?: string` - CSS class name
- `geezOptions?: GeezOptions` - Options for the Geez engine

## Action

### useGeez

You can also use the `useGeez` action directly for custom implementations:

```svelte
<script>
  import { useGeez } from 'geez-input-svelte'
  let value = ''
</script>

<input use:useGeez={{ mode: 'geez' }} bind:value />
```

## License

MIT

