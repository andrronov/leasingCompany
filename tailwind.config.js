/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dev: {
          100: "#3366FF",
          300: "#1F5BFF",
          500: "#2453E0"
        }
      }
    },
    screens: {
      o: "1px",
       xs: "614px",
       s: "769px",
       sm: "1002px",
       md: "1022px",
       lg: "1092px",
       xl: "1280px"
    }
  },
  plugins: [require('@tailwindcss/forms')],
}

