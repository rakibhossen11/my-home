/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
    fontFamily:{
      display: ['Geologica', 'sans-serif'],
      regular: ['Roboto', 'sans-serif'],
      bangla: ['Bangla', 'sans-serif'],
      popiens: ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}

