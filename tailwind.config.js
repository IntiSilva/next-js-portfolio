/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)"],
        nav: ["var(--font-nav)"],
      },
      screens: {
        "2md": "1060px",
        "3md": { max: "1100px" },
        maxLg: { max: "1024px" },
      },
    },
  },
  plugins: [],
};
