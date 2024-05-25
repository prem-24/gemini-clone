/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        card: '#F1F4F8',
        hover: '#E7EAF0',
        title: '#585858',
        normal: '#6F6F6F',
        hoover:'#DEE3E9',
        actiive:'#D6E2FB'
      },
      fontFamily:{
        outfit: ["Outfit", "sans-serif"],
      },
      width: {
        '128': '60rem',
        '50':'3.125 rem'
      }
      ,
      height: {
        '200': '12rem',
        '201':'40rem'
        
      }
    },
  },
  plugins: [],
}


