/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        home:"url('../src/assets/home.png')"
      },
      spacing:{
        120:'37.5rem',
        140:'57rem',
        97:'25.5rem',
        98:'27rem',
        53:'13.5rem',
        54:'13.2rem',
        22:'5.3rem'
      },
      fontSize: {
        'small':'0.5rem',
        '2.5xl':'1.8rem',
        '3xl':'2rem',
        '6xl': '4rem',
      },
      screens: {
        'phone': '10px'},
    colors: {
      'col-1': '#AB06D5',
      'col-2': '#660580',
      'col-3': '#3f034f',
      
      // Correct color definition
    },

    },

    },
  plugins: [],
}

