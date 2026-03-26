/**
 * globals/theme.ts — Stitch "Quantum Ledger" Design Tokens
 * Single source of truth. Change here → propagates via CSS vars to all components.
 */
export const THEME = {
  colors: {
    surface: "#131313",
    containerLowest: "#0E0E0E",
    containerLow: "#1C1B1B",
    container: "#20201F",
    containerHigh: "#2A2A2A",
    containerHighest: "#353535",
    surfaceBright: "#393939",

    primary: "#C0C1FF",
    onPrimary: "#1000A9",
    primaryContainer: "#8083FF",
    primaryFixed: "#E1E0FF",

    secondary: "#FFB5A1",
    onSecondary: "#601400",
    secondaryContainer: "#852305",

    tertiary: "#4CD6FF",
    onTertiary: "#003543",
    tertiaryContainer: "#009DC1",

    onSurface: "#E5E2E1",
    onSurfaceVariant: "#C7C4D7",
    outlineVariant: "#464554",
    outline: "#908FA0",

    error: "#FFB4AB",
    errorContainer: "#93000A",
    onError: "#690005",
  },
  gradients: {
    primary: "linear-gradient(135deg, #C0C1FF 0%, #009DC1 100%)",
    glow: "radial-gradient(ellipse at top, rgba(99,102,241,0.15) 0%, transparent 60%)",
  },
  fonts: {
    display: "'Space Grotesk'",
    body: "'Inter'",
    mono: "'JetBrains Mono'",
  },
  radius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "1.5rem",
    "2xl": "2rem",
  },
  spacing: {
    sidebar: "240px",
    sidebarCollapsed: "64px",
  },
} as const;

export type Theme = typeof THEME;
