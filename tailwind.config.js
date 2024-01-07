/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueBase: "var(--blue-base)",
        darkBlue: "var(--dark-blue)",
        lightBlue: "var(--light-blue)",
        saturatedBlue: "var(--saturated-blue)",
        desaturatedBlue: "var(--desaturated-blue)",
        blackBlue: "var(--black-blue)",
        whiteBlue: "var(--white-blue)",
        purple: "var(--purple)",
        black: "var(--black)",
        white: "var(--white)",
        error: "var(--error)",
        input: "var(--input)",
        darkGray: "var(--dark-gray)",
        lightGray: "var(--light-gray)",
      },
    },
  },
  plugins: [],
};
