import daisyui from "daisyui";

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
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },

  plugins: [daisyui],
  daisyui: {
    darkTheme: "light",
  },
};
