# Contributing to Geez Library

Thank you for your interest in contributing to the Geez Library! We welcome contributions from the community.

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/onesamket/geez-input.git
cd geez-input
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The demo site will be available at `http://localhost:3000`.

## Project Structure

```
geez-library/
├── src/                    # Library source code
│   ├── components/        # React components
│   ├── engine.ts         # Core transformation engine
│   ├── use-geez.ts       # React hook
│   ├── types.ts          # TypeScript types
│   ├── mapping.ts        # Character mappings
│   └── main.ts           # Main entry point
├── app/                   # Demo site (Next.js)
├── components/            # Demo site components
└── dist/                  # Built library (generated)
```

## Building the Library

To build the library for distribution:

```bash
npm run build
```

This will:
1. Compile TypeScript with type definitions
2. Bundle the library with Vite
3. Generate separate CSS files for tree-shaking
4. Output everything to the `dist/` directory

## Testing Your Changes

1. Build the library: `npm run build`
2. Test the demo site: `npm run dev`
3. Check type definitions: Ensure TypeScript compilation succeeds

## Code Style

- Use TypeScript for all code
- Add JSDoc comments for public APIs
- Follow existing code formatting
- Run `npm run lint` before committing

## Adding New Features

1. Add your code to the `src/` directory
2. Export from `src/main.ts` if it's a public API
3. Add comprehensive JSDoc documentation
4. Update the demo site in `app/page.tsx` to showcase the feature
5. Update README.md with usage examples

## Character Mappings

If you're adding or modifying Geez character mappings:

1. Edit `src/mapping.ts`
2. Follow the existing structure
3. Add comments explaining the mapping
4. Test thoroughly with the demo site

## Submitting Changes

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Commit with clear messages: `git commit -m "Add feature: description"`
5. Push to your fork: `git push origin feature/your-feature-name`
6. Open a Pull Request

## Pull Request Guidelines

- Describe what your PR does
- Link any related issues
- Ensure the build passes
- Update documentation as needed
- Keep PRs focused on a single feature or fix

## Questions?

Feel free to open an issue for:
- Bug reports
- Feature requests
- Questions about the codebase
- Discussion about improvements

Thank you for contributing!
