import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      solidenTrial: ['var(--font-soliden-trial)'],
    },
    extend: {
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'light', // default theme from the themes object
      defaultExtendTheme: 'light', // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: '#F5A524',
            secondary: '#3BF4FB',
            tertiary: '#0A81D1',
          },
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: '#3BF4FB',
            secondary: '#0A81D1',
            tertiary: '#F5A524',
          }, // dark theme colors
        },
        customTheme: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: '#3BF4FB',
            secondary: '#0A81D1',
            background: {
              primary: '#3BF4FB',
              secondary: '#0A81D1',
            },
          }, // dark theme colors
        },
      },
    }),
  ],
};
