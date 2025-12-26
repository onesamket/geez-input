# Changelog

## 1.1.0

### Minor Changes

- Extracted core library from React with backward compatibility maintained. The core transformation engine (`GeezEngine`) is now available as a framework-agnostic module via `geez-input/core`, enabling use with any JavaScript framework. React components remain fully backward compatible and can be imported from `geez-input/react`. This change enables framework-specific implementations (Svelte, Vue) while maintaining the existing React API.

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.9] - 2025-12-23

### Improved

- Enhanced type definitions with better JSDoc documentation
- Improved code examples in type definitions
- Better documentation for `SyllableMap` and `PhoneticMap` types

## [1.0.7] - 2025-12-22

### Changed

- Package build and distribution improvements

## [1.0.6] - 2025-12-22

### Changed

- Build configuration updates

## [1.0.5] - 2025-12-21

### Changed

- Package metadata improvements

## [1.0.4] - 2025-12-21

### Changed

- Minor version bump for npm publication

## [1.0.3] - 2025-12-21

### Improved

- **Enhanced TypeScript Support**: Improved type definitions for full autocomplete support
- **Better Type Safety**: Interface now properly extends all HTML input/textarea attributes
- **Improved Documentation**: Added comprehensive TypeScript usage examples
- All native HTML attributes now have full IntelliSense/autocomplete support
- Better JSDoc documentation for all props and attributes

### Fixed

- Fixed TypeScript autocomplete not showing all HTML input attributes
- Fixed TypeScript autocomplete not showing all HTML textarea attributes
- Improved type definitions for better IDE support

## [1.0.2] - 2025-12-20

### Changed

- Version bump for npm publication

## [1.0.1] - 2025-12-20

### Added

- Initial release of Geez Library
- `GeezInput` component with phonetic keyboard support
- `GeezTextArea` component for longer text
- `useGeez` hook for custom implementations
- `GeezEngine` core transformation engine
- Complete TypeScript type definitions
- Comprehensive JSDoc documentation
- Interactive demo site with examples
- Support for:
  - Consonant transformations (h → ህ, l → ል, etc.)
  - Syllable formations (ህ + a → ሀ)
  - Multi-character consonants (sh → ሽ)
  - Double vowel forms (ሀ + a → ሃ)
  - Punctuation marks (: →፡, :: → ።)
- Tree-shakeable CSS with automatic injection
- Full React 18 and 19 support
- Controlled and uncontrolled component patterns
- Form library compatibility (React Hook Form, etc.)

### Documentation

- Complete API reference
- Interactive code examples
- Installation guide
- Usage examples for common scenarios
- Contributing guidelines
- MIT License

[1.0.0]: https://github.com/yourusername/geez-library/releases/tag/v1.0.0
