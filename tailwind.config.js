/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        great: ["'Great Vibes'", 'serif'],
        popins: ["'Poppins'", 'serif'],
      },
      colors: {
        "light": "#FFFFF",
        "gold": "#c8a97e",
        "lightgray": "#fafafa",
      },
      maxWidth: {
        "container": "1140px"
      },
   

    },
  },
  plugins: [],
}

