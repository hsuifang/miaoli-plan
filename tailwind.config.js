/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#467B62",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
