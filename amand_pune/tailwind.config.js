/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-green)",
        bgColor: "var(--white-bg)",
        secondary: "var(--secondary-green)",
        textColor: "var(--font-color)",
        darkGreen: "#00712D",
      },
      fontFamily: {
        charter: ["Charter"],
        mont: ["Montserrat"],
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "775px",
      lg: "1024px",
      xl: "1280px",
    },
  },
};
