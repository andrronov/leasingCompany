/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      o: "1px",
       xs: "614px",
       sm: "1002px",
       md: "1022px",
       lg: "1092px",
       xl: "1280px"
    }
  },
  plugins: [],
}

