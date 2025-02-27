/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"], 
        drukWide: ["Druk Wide", "sans-serif"],
        drukCond: ["Druk Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
