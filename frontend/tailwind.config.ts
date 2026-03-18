import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page:           "rgb(var(--color-page) / <alpha-value>)",
        surface:        "rgb(var(--color-surface) / <alpha-value>)",
        "surface-raised":"rgb(var(--color-surface-raised) / <alpha-value>)",
        border:         "rgb(var(--color-border) / <alpha-value>)",
 
        "text-primary":   "rgb(var(--color-text-primary) / <alpha-value>)",
        "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
        "text-muted":     "rgb(var(--color-text-muted) / <alpha-value>)",
 
        brand:          "rgb(var(--color-brand) / <alpha-value>)",
        "brand-hover":  "rgb(var(--color-brand-hover) / <alpha-value>)",
        "brand-active": "rgb(var(--color-brand-active) / <alpha-value>)",
        "brand-disabled":"rgb(var(--color-brand-disabled) / <alpha-value>)",
 
        accent:         "rgb(var(--color-accent) / <alpha-value>)",
        "accent-fg":    "rgb(var(--color-accent-fg) / <alpha-value>)",
 
        "tab-bg":       "rgb(var(--color-tab-bg) / <alpha-value>)",
        "tab-active":   "rgb(var(--color-tab-active) / <alpha-value>)",
        "tab-text":     "rgb(var(--color-tab-text) / <alpha-value>)",
 
        panel:          "rgb(var(--color-panel) / <alpha-value>)",
        "panel-text":   "rgb(var(--color-panel-text) / <alpha-value>)",
        "panel-muted":  "rgb(var(--color-panel-muted) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
