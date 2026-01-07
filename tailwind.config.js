/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Aptos', 'system-ui', 'sans-serif'],
        display: ['Aptos Display', 'Aptos', 'system-ui', 'sans-serif'],
      },
      colors: {
        'ctg-blue': '#063F5C',
        'ctg-mustard': '#F4AB1B',
        'ctg-white': '#FFFFFF',
        'ctg-black': '#000000',
        primary: '#063F5C',
        secondary: '#F4AB1B',
        white: '#FFFFFF',
        black: '#000000',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slowZoom: 'slowZoom 15s ease-out forwards',
      },
    },
  },
  plugins: [],
}

