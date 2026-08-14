/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          light: "#818CF8",
          DEFAULT: "#4F46E5",
          dark: "#4338CA",
        },

        secondary: {
          DEFAULT: "#64748B",
        },

        background: {
          DEFAULT: "#FFFFFF",
          paper: "#F8FAFC",
        },

        text: {
          primary: "#0F172A",
          secondary: "#64748B",
          light: "#94A3B8",
        },

        border: "#E2E8F0",

        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",

        sale: "#DC2626",
        discount: "#16A34A",
        star: "#FACC15",
        wishlist: "#EC4899",
      },
    },
  },

  plugins: [],
};