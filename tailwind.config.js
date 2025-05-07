/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0073ff',
          600: '#005ccc',
          700: '#004599',
          800: '#002e66',
          900: '#001733',
        },
        secondary: {
          50: '#e6f0f9',
          100: '#cce1f3',
          200: '#99c3e7',
          300: '#66a5db',
          400: '#3387cf',
          500: '#0069c3',
          600: '#00549c',
          700: '#003f75',
          800: '#002a4e',
          900: '#001527',
        },
        dark: {
          50: '#e6e8ec',
          100: '#ccd1d9',
          200: '#99a3b3',
          300: '#66758d',
          400: '#334767',
          500: '#001941',
          600: '#001434',
          700: '#000f27',
          800: '#000a1a',
          900: '#00050d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
