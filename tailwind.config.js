/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-green": "#2FE5DC",
        "dark-blue": "#2E3E5C",
        "light-blue": "#BAE8ED",
      },
    },
  },
  plugins: [],
};
