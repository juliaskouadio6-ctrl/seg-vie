/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#15181F',
        paper: '#FBFAF8',
        line: '#E6E3DC',
        navy: {
          50: '#EEF1F7',
          100: '#D7DEEC',
          400: '#3A527A',
          500: '#1F3A63',
          600: '#16294A',
          900: '#0C1830',
        },
        gold: {
          400: '#C9A24B',
          500: '#B4903D',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        float: '0 12px 32px -8px rgba(12, 24, 48, 0.18)',
        card: '0 1px 2px rgba(21,24,31,0.04), 0 8px 24px -12px rgba(21,24,31,0.10)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
