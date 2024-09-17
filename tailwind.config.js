/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cerise-red": {
          50: "#fef2f3",
          100: "#fee5ea",
          200: "#fccfd9",
          300: "#faa7bb",
          400: "#f67697",
          500: "#eb2f64",
          600: "#da2460",
          700: "#b81851",
          800: "#9a1749",
          900: "#841745",
          950: "#490821",
        },
      },
    },
  },
  plugins: [],
};
