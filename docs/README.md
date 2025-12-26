# Geez Input Documentation Site

This is the documentation website for the Geez Input library, showcasing the library's features, usage examples, and interactive demos.

## Architecture

The Geez Input library is built with a modular architecture:

### Core Package (`geez-input/core`)

The framework-agnostic core engine that handles all phonetic transformations. Use this to build integrations with any JavaScript framework or vanilla JavaScript.

```ts
import { GeezEngine } from "geez-input/core";

const result = GeezEngine.transform("h", "", "a");
// result.transformedValue === "ሀ"
```

### React Package (`geez-input/react`)

Ready-to-use React components and hooks built on top of the core engine.

```tsx
import { GeezInput, GeezTextArea, useGeez } from "geez-input/react";
```

## Framework Support

### React ✅

Full support with components and hooks available now.

- `GeezInput` - Input component with Geez keyboard support
- `GeezTextArea` - Textarea component with Geez keyboard support
- `useGeez` - React hook for custom implementations

### Svelte 🚧

Coming soon! You can use the core engine directly in the meantime.

### Angular 🚧

Coming soon! You can use the core engine directly in the meantime.

### Vue 🚧

Coming soon! You can use the core engine directly in the meantime.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- Interactive playground demonstrating Geez input
- Form integration examples with React Hook Form
- Comprehensive documentation with code examples
- Phonetic guide for learning Geez input patterns
- Dark mode optimized design

## Tech Stack

- [React](https://react.dev/) - UI framework
- [TanStack Router](https://tanstack.com/router) - Routing
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vite](https://vitejs.dev/) - Build tool
