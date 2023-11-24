/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueBase: "var(--blue-base)",
        darkBlue: "var(--dark-blue)",
        lightBlue: "var(--light-blue)",
        saturedBlue: "var(--saturated-blue)",
        desaturedBlue: "var(--desaturated-blue)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        black: "var(--black)",
        text: "var(--white)",
        error: "var(--error)",
        input: "var(--input)",
        darkGray: "var(--dark-gray)",
        lightGray: "var(--light-gray)",
      },
    },
  },
  plugins: [],
};
