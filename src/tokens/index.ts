/**
 * Design Tokens Export
 *
 * This module re-exports design tokens from @jens_erven/design-tokens-brio package.
 *
 * Note: Raw token TypeScript/CSS files should be imported directly from @jens_erven/design-tokens-brio:
 *
 * @example TypeScript Tokens
 * ```typescript
 * import * as amsterdamLight from '@jens_erven/design-tokens-brio/tokens/amsterdam/light';
 * ```
 *
 * @example CSS Variables
 * ```typescript
 * import '@jens_erven/design-tokens-brio/css/amsterdam/light';
 * ```
 *
 * @example Tailwind CSS v4
 * ```typescript
 * import '@jens_erven/design-tokens-brio/css/tailwind';
 * ```
 */

export type { ThemeMode, ThemeName } from "../themes";

// Re-export tokens from @jens_erven/design-tokens-brio package
export * as amsterdamDark from "@jens_erven/design-tokens-brio/tokens/amsterdam/dark";
export * as amsterdamLight from "@jens_erven/design-tokens-brio/tokens/amsterdam/light";
export * as barcelonaDark from "@jens_erven/design-tokens-brio/tokens/barcelona/dark";
export * as barcelonaLight from "@jens_erven/design-tokens-brio/tokens/barcelona/light";
export * as berlinDark from "@jens_erven/design-tokens-brio/tokens/berlin/dark";
export * as berlinLight from "@jens_erven/design-tokens-brio/tokens/berlin/light";
export * as lisbonDark from "@jens_erven/design-tokens-brio/tokens/lisbon/dark";
export * as lisbonLight from "@jens_erven/design-tokens-brio/tokens/lisbon/light";
export * as londonDark from "@jens_erven/design-tokens-brio/tokens/london/dark";
export * as londonLight from "@jens_erven/design-tokens-brio/tokens/london/light";
