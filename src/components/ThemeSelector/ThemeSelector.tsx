/**
 * Theme Selector Component
 *
 * A Material-UI Select dropdown for choosing between themes.
 * Can be placed anywhere within AppThemeProvider.
 *
 * @module components/ThemeSelector
 */

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useAppTheme } from "../../providers";
import type { ThemeName } from "../../themes";

export interface ThemeSelectorProps {
  /** Show label for the select (default: true) */
  showLabel?: boolean;
  /** Label text (default: 'Theme') */
  label?: string;
  /** Size of the select (default: 'medium') */
  size?: "small" | "medium";
  /** Custom width (default: 120) */
  width?: number | string;
  /** Additional sx props */
  sx?: object;
}

/**
 * Theme Selector Component
 *
 * A Material-UI dropdown for selecting the current theme.
 * Must be used within AppThemeProvider.
 *
 * @example
 * ```typescript
 * import { ThemeSelector } from 'your-library';
 *
 * function Header() {
 *   return (
 *     <AppBar>
 *       <Toolbar>
 *         <ThemeSelector />
 *       </Toolbar>
 *     </AppBar>
 *   );
 * }
 * ```
 */
export function ThemeSelector({
  showLabel = true,
  label = "Theme",
  size = "medium",
  width = 120,
  sx = {},
}: ThemeSelectorProps) {
  const { themeName, setTheme } = useAppTheme();

  const handleChange = (event: SelectChangeEvent) => {
    setTheme(event.target.value as ThemeName);
  };

  return (
    <FormControl size={size} sx={{ minWidth: width, ...sx }}>
      {showLabel && <InputLabel id="theme-selector-label">{label}</InputLabel>}
      <Select
        labelId="theme-selector-label"
        id="theme-selector"
        value={themeName}
        label={showLabel ? label : undefined}
        onChange={handleChange}
      >
        <MenuItem value="amsterdam">Amsterdam</MenuItem>
        <MenuItem value="barcelona">Barcelona</MenuItem>
        <MenuItem value="berlin">Berlin</MenuItem>
        <MenuItem value="lisbon">Lisbon</MenuItem>
        <MenuItem value="london">London</MenuItem>
      </Select>
    </FormControl>
  );
}



