/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px',    // Custom extra small screen
      sm: '640px',    
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',   
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
         sofadiOne: ['Sofadi One', 'sans-serif'],
        playpenSans: ['Playpen Sans', 'cursive'],
        playwrite: ['"Playwrite GB S"', 'cursive'], // Custom font
      },

     
    },
  },
  plugins: [],
}