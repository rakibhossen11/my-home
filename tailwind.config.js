/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      display: ['Geologica', 'sans-serif'],
      regular: ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}

