/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    "./src/pages/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#3772FF',
      'green': '#36D6AD',
      'coral': '#FC7071',
      'coral-hover': '#FF9D9E',
      'cream': '#FCF0E3',
      'gray': '#737380',
      'light-gray': '#BCBCBC',
      'background-gray': '#F6F6F6',
      'white': '#FFFFFF'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      ibm: ['IBM Plex Sans', 'sans-serif']
    },
    boxShadow: {
      'button': 'rgba(0, 0, 0, 0.3) 2.4px 2.4px 3.2px',
      'input': 'rgba(0, 0, 0, 0.25) 0px 2px 2px 0px;'
    }
  },
  plugins: [],
}