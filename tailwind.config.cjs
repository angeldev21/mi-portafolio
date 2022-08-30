/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        minmax: "repeat(4, max-content)",
      },
    },
    fontFamily: {
      "fira-code": ["Fira Code", "monospace"],
      "system-ui": ["system-ui", "sans-serif"],
    },
  },
  plugins: [],
};
