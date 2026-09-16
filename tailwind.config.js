 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        /* ================================
           BRAND COLORS
        ================================= */

        primary: "#8B3DF5",
        primaryHover: "#7630D8",

        secondary: "#0099FF",
        success: "#2DBB55",
        warning: "#FF7043",
        danger: "#EF4444",


        /* ================================
           THEME COLORS
        ================================= */

        "theme-page": "var(--color-page)",
        "theme-surface": "var(--color-surface)",
        "theme-surface-secondary": "var(--color-surface-secondary)",

        "theme-text": "var(--color-text)",
        "theme-text-secondary": "var(--color-text-secondary)",
        "theme-text-muted": "var(--color-text-muted)",

        "theme-border": "var(--color-border)",
        "theme-border-light": "var(--color-border-light)",


        /* ================================
           EXISTING COLORS
           Keep these for compatibility
        ================================= */

        textPrimary: "#111111",
        textSecondary: "#6B7280",
        textMuted: "#9CA3AF",

        border: "#1F1F1F",
        borderLight: "#D1D5DB",

        background: "#FFFFFF",
        pageBackground: "#151026",
      },
    },
  },

  plugins: [],
};