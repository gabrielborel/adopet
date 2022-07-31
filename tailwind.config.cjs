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
      'background-gray': '#F6F6F6'
    },
    extend: {},
  },
  plugins: [],
}