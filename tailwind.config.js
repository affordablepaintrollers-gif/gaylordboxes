/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f4f6f9',
          100: '#e6ebf2',
          200: '#c9d4e4',
          300: '#9db4cf',
          400: '#6a8db4',
          500: '#48709c',
          600: '#385880',
          700: '#2e4768',
          800: '#283c56',
          900: '#1d2c40',
          950: '#121d2c',
        },
      },
    },
  },
  plugins: [],
};
