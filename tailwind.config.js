/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "rgb(5 12 23)",
        "custom-yellow": "rgb(208 212 55)"
      },
    },
  },
  plugins: [],
};
