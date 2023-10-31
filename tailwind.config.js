/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
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
})

// export default 

