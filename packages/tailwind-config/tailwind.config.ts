import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Omit<Config, "content"> = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "var(--color-surface)",
        "container-low": "var(--color-container-low)",
        container: "var(--color-container)",
        "container-high": "var(--color-container-high)",
        "container-highest": "var(--color-container-highest)",
        primary: "var(--color-primary)",
        "on-primary": "var(--color-on-primary)",
        tertiary: "var(--color-tertiary)",
        "on-surface": "var(--color-on-surface)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "outline-variant": "var(--color-outline-variant)",
        secondary: "var(--color-secondary)",
        "on-secondary": "var(--color-on-secondary)",
        error: "var(--color-error)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-glow": "var(--gradient-glow)",
      },
      boxShadow: {
        glow: "0 0 40px 0 rgba(192, 193, 255, 0.06)",
        "glow-lg": "0 0 60px 0 rgba(192, 193, 255, 0.1)",
      },
      animation: {
        shimmer: "shimmer 1.8s linear infinite",
        "fade-in": "fadeIn 0.35s ease forwards",
        "slide-up": "slideUp 0.35s ease forwards",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
