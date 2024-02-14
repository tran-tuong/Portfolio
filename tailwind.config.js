/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
      letterSpacing: {
        widest: "0.4em",
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        theme_grayishBlue: "hsl(237, 18%, 59%)",
        theme_softRed: "hsl(345, 95%, 68%)",
        theme_white: "hsl(0, 0%, 100%)",
        theme_darkDesaturatedBlue: "hsl(236, 21%, 26%)",
        theme_veryDarkBlue: "hsl(235, 16%, 14%)",
        theme_veryDarkMostlyBlackBlue: "hsl(234, 17%, 12%)",
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        flipTop: "flipTop 1s ease-in",
        flipBottom: "flipBottom 1s ease-in",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      keyframes: {
        flipTop: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(-180deg)" },
        },
        flipBottom: {
          "0%": { transform: "rotateX(180deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",
      },
      screens: {
        "2xl": { max: "1535px" },
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant("after", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`;
        });
      });
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".brightness-80": {
          filter: "brightness(80%)",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".perspective": {
          "perspective-origin": "50% 50%",
          perspective: "450px",
        },
        ".bg-x-82": {
          "background-position-x": "82%",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
