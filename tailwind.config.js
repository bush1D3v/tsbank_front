/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        black: "var(--black)",
        background: "var(--bg)",
        primary: "var(--primary)",
        input: "var(--input)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        error: "var(--error)",
      },
    },
  },
  plugins: [],
};
