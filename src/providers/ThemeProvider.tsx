/**
 * Theme Provider Wrapper
 *
 * A convenient wrapper around Material-UI's ThemeProvider that adds:
 * - Built-in theme switching (amsterdam, barcelona, berlin, lisbon, london)
 * - Light/Dark mode toggle
 * - LocalStorage persistence
 * - System preference detection
 * - Easy-to-use React Context API
 * - Tailwind CSS v4 integration (CSS layers configured automatically)
 *
 * @module providers/ThemeProvider
 */

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import type { ThemeOptions } from "@mui/material/styles";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { themes, type ThemeMode, type ThemeName } from "../themes";

// Context type definition
interface ThemeContextType {
  /** Current theme name (amsterdam, barcelona, berlin, lisbon, london) */
  themeName: ThemeName;
  /** Current mode (light, dark) */
  mode: ThemeMode;
  /** Set the theme name */
  setTheme: (name: ThemeName) => void;
  /** Set the mode */
  setMode: (mode: ThemeMode) => void;
  /** Toggle between light and dark mode */
  toggleMode: () => void;
}

// Create context with undefined default
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider props
interface AppThemeProviderProps {
  /** Child components */
  children: ReactNode;
  /** Default theme name (default: 'amsterdam') */
  defaultTheme?: ThemeName;
  /** Default mode (default: 'light', or system preference if useSystemPreference is true) */
  defaultMode?: ThemeMode;
  /** Enable localStorage persistence (default: true) */
  enablePersistence?: boolean;
  /** LocalStorage key prefix (default: 'app-theme') */
  storageKey?: string;
  /** Detect and use system color scheme preference (default: true) */
  useSystemPreference?: boolean;
  /** Custom theme extensions/overrides */
  themeExtension?: ThemeOptions;
  /** Disable CssBaseline (default: false) */
  disableCssBaseline?: boolean;
  /** Enable Tailwind CSS v4 integration (default: true) - Configures CSS layers for Tailwind */
  enableTailwindIntegration?: boolean;
}

const STORAGE_THEME_KEY = "theme-name";
const STORAGE_MODE_KEY = "theme-mode";

/**
 * Theme Provider Component
 *
 * Wraps your application with Material-UI ThemeProvider and provides
 * convenient theme switching functionality.
 *
 * @example
 * ```typescript
 * import { AppThemeProvider, ThemeSelector, ThemeModeToggle } from 'your-library';
 *
 * function App() {
 *   return (
 *     <AppThemeProvider defaultTheme="amsterdam" defaultMode="light">
 *       <Header>
 *         <ThemeSelector />
 *         <ThemeModeToggle />
 *       </Header>
 *       <YourApp />
 *     </AppThemeProvider>
 *   );
 * }
 * ```
 */
export function AppThemeProvider({
  children,
  defaultTheme = "amsterdam",
  defaultMode,
  enablePersistence = true,
  storageKey = "app-theme",
  useSystemPreference = true,
  themeExtension,
  disableCssBaseline = false,
  enableTailwindIntegration = true,
}: AppThemeProviderProps) {
  // Detect system preference
  const getSystemPreference = (): ThemeMode => {
    if (typeof window === "undefined" || !useSystemPreference) {
      return "light";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // Initialize theme from localStorage or defaults
  const getInitialTheme = (): ThemeName => {
    if (!enablePersistence || typeof window === "undefined") {
      return defaultTheme;
    }
    const stored = localStorage.getItem(`${storageKey}-${STORAGE_THEME_KEY}`);
    return (stored as ThemeName) || defaultTheme;
  };

  const getInitialMode = (): ThemeMode => {
    if (!enablePersistence || typeof window === "undefined") {
      return defaultMode || getSystemPreference();
    }
    const stored = localStorage.getItem(`${storageKey}-${STORAGE_MODE_KEY}`);
    return (stored as ThemeMode) || defaultMode || getSystemPreference();
  };

  // State
  const [themeName, setThemeNameState] = useState<ThemeName>(getInitialTheme);
  const [mode, setModeState] = useState<ThemeMode>(getInitialMode);

  // Persist to localStorage
  useEffect(() => {
    if (enablePersistence && typeof window !== "undefined") {
      localStorage.setItem(`${storageKey}-${STORAGE_THEME_KEY}`, themeName);
      localStorage.setItem(`${storageKey}-${STORAGE_MODE_KEY}`, mode);
    }
  }, [themeName, mode, enablePersistence, storageKey]);

  // Listen to system preference changes
  useEffect(() => {
    if (!useSystemPreference || typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!enablePersistence) {
        setModeState(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [useSystemPreference, enablePersistence]);

  // Theme switching functions
  const setTheme = (name: ThemeName) => {
    setThemeNameState(name);
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
  };

  const toggleMode = () => {
    setModeState((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Create the actual MUI theme with optional extensions
  const currentTheme = useMemo(() => {
    const baseTheme = themes[themeName][mode];

    if (themeExtension) {
      return createTheme(baseTheme, themeExtension);
    }

    return baseTheme;
  }, [themeName, mode, themeExtension]);

  // Context value
  const contextValue: ThemeContextType = {
    themeName,
    mode,
    setTheme,
    setMode,
    toggleMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledEngineProvider injectFirst={enableTailwindIntegration}>
        <MuiThemeProvider theme={currentTheme}>
          {enableTailwindIntegration && (
            <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
          )}
          {!disableCssBaseline && <CssBaseline />}
          {children}
        </MuiThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context
 *
 * @throws {Error} If used outside of AppThemeProvider
 * @returns {ThemeContextType} Theme context with current theme state and setters
 *
 * @example
 * ```typescript
 * function MyComponent() {
 *   const { themeName, mode, toggleMode } = useAppTheme();
 *   return <button onClick={toggleMode}>Toggle {mode} mode</button>;
 * }
 * ```
 */
export function useAppTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useAppTheme must be used within an AppThemeProvider");
  }

  return context;
}

// Re-export types for convenience
export type { AppThemeProviderProps, ThemeContextType };


