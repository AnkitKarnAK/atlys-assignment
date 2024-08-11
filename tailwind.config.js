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
          400: "#6B6C70", // main title
          300: "#7F8084", // post card text
          white: "#FFFFFF", // post card text
        },
      },

      backgroundImage: {
        "gradient-inner":
          "linear-gradient(to bottom, #27292d, #27292d), linear-gradient(132deg, #969696, #343434 98%)",
        "gradient-ring-outer": "linear-gradient(132deg, #969696, #343434 98%)",
      },

      screens: {
        mobile: {
          max: "639px",
        },
        tablet: {
          min: "640px",
          max: "1023px",
        },
        desktop: {
          min: "1024px",
        },
      },
    },
  },
  plugins: [],
};
