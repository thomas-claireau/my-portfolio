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
      gray: {
        100: '#f8f8f8',
        300: '#a8a8b2',
      },
      blue: '#2d96bd',
      white: '#fff',
      transparent: 'transparent',
      inherit: 'inherit',
    },
    borderColor: (theme) => ({
      DEFAULT: theme('colors.gray.100', 'currentColor'),
    }),
    animation: {
      cursor: 'cursor 1s ease-in-out infinite',
    },
    keyframes: {
      cursor: {
        '0%, 100%': { opacity: '0' },
        '50%': { opacity: '1' },
      },
    },
  },
  plugins: [],
};
