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
  },
  plugins: [daisyui],
  daisyui: {
    darkTheme: "light",
  },
};
