# Component Library

A React component library built with TypeScript, Material-UI, and Tailwind CSS v4.

## Installation

```bash
npm install @jens_erven/component-lib
```

## Dependencies

This library requires the following peer dependencies:

- `react` (^18.0.0 || ^19.0.0)
- `react-dom` (^18.0.0 || ^19.0.0)
- `@mui/material` (^7.3.6)
- `@mui/icons-material` (^7.3.6)
- `@emotion/react` (^11.14.0)
- `@emotion/styled` (^11.14.1)

This library also depends on:

- `@jens_erven/design-tokens-brio` - Design tokens package (TypeScript, CSS, Tailwind CSS v4)
- test

## Usage

### Basic Setup

```typescript
import { AppThemeProvider } from "@jens_erven/component-lib";

function App() {
  return (
    <AppThemeProvider defaultTheme="amsterdam" defaultMode="light">
      <YourApp />
    </AppThemeProvider>
  );
}
```

### Components

```typescript
import {
  ProfileCard,
  ThemeSelector,
  ThemeModeToggle,
} from "@jens_erven/component-lib";

function MyComponent() {
  return (
    <>
      <ThemeSelector />
      <ThemeModeToggle />
      <ProfileCard name="John Doe" role="Developer" email="john@example.com" />
    </>
  );
}
```

### Themes

The library provides pre-configured Material-UI themes based on design tokens from `@jens_erven/design-tokens-brio`.

Available themes:

- `amsterdam` (light/dark)
- `barcelona` (light/dark)
- `berlin` (light/dark)
- `lisbon` (light/dark)
- `london` (light/dark)

### Design Tokens

Design tokens are available from the `@jens_erven/design-tokens-brio` package:

```typescript
// TypeScript tokens
import * as amsterdamLight from "@jens_erven/design-tokens-brio/tokens/theme-amsterdam/light";

// CSS variables
import "@jens_erven/design-tokens-brio/css/theme-amsterdam/light";

// Tailwind CSS v4
import "@jens_erven/design-tokens-brio/css/tailwind";
```

## Development

```bash
# Install dependencies
npm install

# Generate MUI themes from design tokens
npm run build:mui-themes

# Build the library
npm run build

# Run Storybook
npm run storybook
```

## Building

The build process:

1. Generates MUI themes from `@jens_erven/design-tokens-brio` package
2. Compiles TypeScript
3. Bundles with Vite

```bash
npm run build
```

## Storybook

View components in Storybook:

```bash
npm run storybook
```

## Publishing

This package is published to npm as `@jens_erven/component-lib`.

### Manual Publishing

1. **Update version** in `package.json`:

   ```bash
   npm version patch  # for 0.0.1 -> 0.0.2
   npm version minor  # for 0.0.1 -> 0.1.0
   npm version major  # for 0.0.1 -> 1.0.0
   ```

2. **Build the library**:

   ```bash
   npm run build
   ```

3. **Publish to npm**:
   ```bash
   npm publish
   ```

### Automated Publishing

The package is automatically published to npm when a version tag is pushed:

```bash
# Create and push a version tag
git tag v1.0.0
git push origin v1.0.0
```

The GitHub Actions workflow will:

1. Build the library
2. Generate MUI themes
3. Publish to npm automatically

### Prerequisites

- `NPM_TOKEN` secret must be configured in GitHub repository settings
- You must be logged in to npm with publish permissions for `@jens_erven` scope

## License

MIT
