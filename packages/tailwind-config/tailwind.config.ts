import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Omit<Config, "content"> = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed-variant": "#653c2f",
        "primary-container": "#e8ae9b",
        "tertiary": "#009767",
        "on-background": "#1a1613",
        "outline-variant": "#d1c5be",
        "surface-container": "#eee7dc",
        "on-error-container": "#93000a",
        "primary-fixed": "#ffdbd0",
        "on-primary-fixed-variant": "#7b2f13",
        "tertiary-fixed-dim": "#5ddac8",
        "error-container": "#ffdad6",
        "primary-fixed-dim": "#ffb59d",
        "on-secondary-container": "#1a1613",
        "surface-dim": "#dfd2be",
        "outline": "#8a7d76",
        "on-primary-container": "#200d07",
        "secondary": "#5e5753",
        "surface-container-lowest": "#ffffff",
        "on-primary": "#ffffff",
        "secondary-fixed": "#e6dfda",
        "tertiary-fixed": "#a5efd2",
        "surface": "#f5f0e8",
        "surface-container-highest": "#ddd0bd",
        "inverse-primary": "#ffb59d",
        "error": "#ba1a1a",
        "surface-bright": "#f5f0e8",
        "on-tertiary-fixed-variant": "#002115",
        "on-error": "#ffffff",
        "on-primary-fixed": "#390b00",
        "on-secondary-fixed": "#1a1613",
        "background": "#f5f0e8",
        "on-secondary": "#ffffff",
        "on-tertiary-container": "#002115",
        "on-tertiary-fixed": "#002115",
        "surface-container-high": "#e5dbcc",
        "surface-variant": "#e5dbcc",
        "on-surface": "#1a1613",
        "secondary-container": "#e6dfda",
        "inverse-surface": "#343028",
        "inverse-on-surface": "#f5f0e8",
        "surface-tint": "#d17357",
        "surface-container-low": "#f9f6f2",
        "on-surface-variant": "#4d4039",
        "secondary-fixed-dim": "#c2beb9",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#a5efd2",
        "primary": "#d17357"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"],
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem", 
        "lg": "0.25rem", 
        "xl": "0.5rem", 
        "full": "0.75rem",
        "md": "0.375rem"
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #e8ae9b 0%, #d17357 100%)",
        "gradient-glow": "radial-gradient(ellipse at top, rgba(209, 115, 87, 0.15) 0%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px 0 rgba(209, 115, 87, 0.06)",
        "glow-lg": "0 0 60px 0 rgba(209, 115, 87, 0.1)",
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
