// Export components
export { ThemeSelector } from "./components/ThemeSelector";
export type { ThemeSelectorProps } from "./components/ThemeSelector";

export { ThemeModeToggle } from "./components/ThemeModeToggle";
export type { ThemeModeToggleProps } from "./components/ThemeModeToggle";

export { ProfileCard } from "./components/ProfileCard";
export type { ProfileCardProps } from "./components/ProfileCard";

// Export themes
export {
  allThemes,
  // Individual themes - Amsterdam
  amsterdamDarkTheme,
  amsterdamLightTheme,
  // Individual themes - Barcelona
  barcelonaDarkTheme,
  barcelonaLightTheme,
  // Individual themes - Berlin
  berlinDarkTheme,
  berlinLightTheme,
  // Individual themes - Lisbon
  lisbonDarkTheme,
  lisbonLightTheme,
  // Individual themes - London
  londonDarkTheme,
  londonLightTheme,
  // Theme collections
  themes,
  type ThemeMode,
  // Types
  type ThemeName,
} from "./themes";

// Export theme provider and utilities
export { AppThemeProvider, useAppTheme } from "./providers";
export type { AppThemeProviderProps, ThemeContextType } from "./providers";

// Note: Design tokens (TypeScript and CSS) are available from @jens_erven/design-tokens package
// Import them directly:
// import * as amsterdamLight from '@jens_erven/design-tokens/tokens/theme-amsterdam/light';
// import '@jens_erven/design-tokens/css/theme-amsterdam/light';
// import '@jens_erven/design-tokens/css/tailwind';


