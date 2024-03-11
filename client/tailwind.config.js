/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src./App.jsx",
    './src/**/*.jsx',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
}