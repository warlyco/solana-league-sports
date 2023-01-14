/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./features/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  boxShadow: {
    deep: "11px 20px 19px 0px rgba(0,0,0,0.53);",
    "deep-float": "8px 20px 24px 4px rgba(0,0,0,0.4)",
  },
  safelist: ["pt-32", "max-w-5xl", "mx-auto", "md:pt-20", "mb-32"],
};
