/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bambino: {
          red: '#E8352A',
          yellow: '#F9C514',
          green: '#4CAF50',
          blue: '#2196D3',
          purple: '#7B3FA0',
          teal: '#00B5C8',
          orange: '#F5821F',
          white: '#FFFFFF',
          cream: '#FFFDF6',
        },
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
