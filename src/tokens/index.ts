/**
 * Design Tokens Export
 *
 * This module re-exports design tokens from @jens_erven/design-tokens package.
 *
 * Note: Raw token TypeScript/CSS files should be imported directly from @jens_erven/design-tokens:
 *
 * @example TypeScript Tokens
 * ```typescript
 * import * as amsterdamLight from '@jens_erven/design-tokens/tokens/amsterdam/light';
 * ```
 *
 * @example CSS Variables
 * ```typescript
 * import '@jens_erven/design-tokens/css/amsterdam/light';
 * ```
 *
 * @example Tailwind CSS v4
 * ```typescript
 * import '@jens_erven/design-tokens/css/tailwind';
 * ```
 */

export type { ThemeMode, ThemeName } from "../themes";

// Re-export tokens from @jens_erven/design-tokens package
export * as amsterdamDark from "@jens_erven/design-tokens/tokens/amsterdam/dark";
export * as amsterdamLight from "@jens_erven/design-tokens/tokens/amsterdam/light";
export * as barcelonaDark from "@jens_erven/design-tokens/tokens/barcelona/dark";
export * as barcelonaLight from "@jens_erven/design-tokens/tokens/barcelona/light";
export * as berlinDark from "@jens_erven/design-tokens/tokens/berlin/dark";
export * as berlinLight from "@jens_erven/design-tokens/tokens/berlin/light";
export * as lisbonDark from "@jens_erven/design-tokens/tokens/lisbon/dark";
export * as lisbonLight from "@jens_erven/design-tokens/tokens/lisbon/light";
export * as londonDark from "@jens_erven/design-tokens/tokens/london/dark";
export * as londonLight from "@jens_erven/design-tokens/tokens/london/light";

