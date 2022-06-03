module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mini: '375px',
      },
    },
    colors: {
      dark: {
        100: '#292a2d',
        600: '#252627',
        800: '#161209',
      },
      light: '#f6f6f4',
      gray: '#a8a8b2',
      blue: '#2d96bd',
      white: '#fff',
    },
    borderColor: (theme) => ({
      DEFAULT: theme('colors.gray.100', 'currentColor'),
    }),
  },
  plugins: [],
};
