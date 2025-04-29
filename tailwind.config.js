// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#ead2ac",
        brown: {
          DEFAULT: "#603813",
          light:   "#8C6B4B",
          dark:    "#3A1F04",
        },
      },
      boxShadow: {
        hero:     "0 8px 20px rgba(0,0,0,0.15)",
        card:     "0 4px 12px rgba(0,0,0,0.1)",
        cardHover:"0 6px 18px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
