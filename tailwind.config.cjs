/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/hero-pattern.jpg')",
      }
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    }
  },
  plugins: [],
};
