/**
 * Theme Mode Toggle Component
 *
 * A Material-UI Switch for toggling between light and dark mode.
 * Can be placed anywhere within AppThemeProvider.
 *
 * @module components/ThemeModeToggle
 */

import { FormControlLabel, Stack, Switch, Typography } from "@mui/material";
import { useAppTheme } from "../../providers";

export interface ThemeModeToggleProps {
  /** Show label text (default: true) */
  showLabel?: boolean;
  /** Show icons (default: true) */
  showIcons?: boolean;
  /** Size of the switch (default: 'medium') */
  size?: "small" | "medium";
  /** Custom label text when in dark mode (default: 'Dark') */
  darkLabel?: string;
  /** Custom label text when in light mode (default: 'Light') */
  lightLabel?: string;
  /** Additional sx props */
  sx?: object;
}

/**
 * Theme Mode Toggle Component
 *
 * A switch control for toggling between light and dark modes.
 * Must be used within AppThemeProvider.
 *
 * @example
 * ```typescript
 * import { ThemeModeToggle } from 'your-library';
 *
 * function Header() {
 *   return (
 *     <AppBar>
 *       <Toolbar>
 *         <ThemeModeToggle />
 *       </Toolbar>
 *     </AppBar>
 *   );
 * }
 * ```
 */
export function ThemeModeToggle({
  showLabel = true,
  showIcons = true,
  size = "medium",
  darkLabel = "Dark",
  lightLabel = "Light",
  sx = {},
}: ThemeModeToggleProps) {
  const { mode, toggleMode } = useAppTheme();

  const isDark = mode === "dark";

  if (showIcons) {
    return (
      <Stack direction="row" spacing={1} alignItems="center" sx={sx}>
        <span
          style={{
            fontSize: size === "small" ? 20 : 24,
            opacity: isDark ? 0.5 : 1,
          }}
        >
          ☀️
        </span>
        <Switch
          checked={isDark}
          onChange={toggleMode}
          size={size}
          inputProps={{
            "aria-label": `Toggle ${isDark ? "light" : "dark"} mode`,
          }}
        />
        <span
          style={{
            fontSize: size === "small" ? 20 : 24,
            opacity: isDark ? 1 : 0.5,
          }}
        >
          🌙
        </span>
        {showLabel && (
          <Typography variant="body2" sx={{ ml: 1 }}>
            {isDark ? darkLabel : lightLabel}
          </Typography>
        )}
      </Stack>
    );
  }

  return (
    <FormControlLabel
      control={
        <Switch
          checked={isDark}
          onChange={toggleMode}
          size={size}
          inputProps={{
            "aria-label": `Toggle ${isDark ? "light" : "dark"} mode`,
          }}
        />
      }
      label={showLabel ? (isDark ? darkLabel : lightLabel) : ""}
      sx={sx}
    />
  );
}



