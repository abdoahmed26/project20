/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bodyFont': ['"DM Sans"',"sans-serif"] ,
        'titleFont': ['"Poppins"',"sans-serif"] ,
      },
      colors: {
        primeColor: "#262626",
        lightText: "#6D6D6D",
        borderColor : "#e5e7eb",
        backColor : "#F5F5F3",
        textColor : "#767676",
      },
      boxShadow: {
        testShadow: "0px 0px 54px -13px rgba(0,0,0,0.7)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      }
    },
  },
  plugins: [],
}

