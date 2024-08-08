/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          500: "#131319", // page background
          300: "#191920", // post content background
        },
        accent: {
          500: "#4A96FF", // cta button
        },
        dark: {
          black: "#000000", // post card title
          500: "#27292D", // post card background
          300: "#35373B", // post card stroke
        },
        light: {
          500: "#C5C7CA", // post card title
          300: "#7F8084", // post card text
          white: "#FFFFFF", // post card text
        },
      },
    },
  },
  plugins: [],
};
