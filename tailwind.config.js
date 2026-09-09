/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#8B3DF5",
        primaryHover: "#7630D8",

        secondary: "#0099FF",
        success: "#2DBB55",
        warning: "#FF7043",
        danger: "#EF4444",

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