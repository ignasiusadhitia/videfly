/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
    container: {
      padding: { DEFAULT: '2rem', lg: '0' },
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1200px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    extend: {
      backgroundImage: {
        'subtract-main': "url('/src/assets/images/subtract-main.webp')",
        'subtract-result': "url('/src/assets/images/subtract-result.webp')",
      },
      fontSize: {
        xs: '14px',
        sm: '14.4px',
        base: '16px',
        lg: '18px',
        xl: '19.2px',
        '2xl': '20px',
        '3xl': '40px',
        '4xl': '48px',
        '5xl': '76px',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      lineHeight: {
        tight: '100%',
        snug: '120%',
        normal: '130%',
        relaxed: '150%',
      },
      letterSpacing: {
        tight: '-1%',
        normal: '0%',
        wide: '1%',
      },
      colors: {
        white: {
          DEFAULT: 'hsla(0, 0%, 100%, 1)',
          half: 'hsla(0, 0%, 100%, 0.5)',
        },
        offWhite: 'hsla(240, 25%, 97%, 1)',
        purple: {
          primary: 'hsla(258, 78%, 57%, 1)',
          secondary: 'hsla(259, 78%, 65%, 1)',
        },
        black: 'hsla(0, 0%, 0%, 1)',
        gray: {
          200: 'hsla(0, 0%, 54%, 1)',
          paragraph: 'hsla(0, 0%, 33%, 1)',
        },
        red: {
          dark: 'hsla(4, 49%, 49%, 1)',
        },
        disabled: {
          button: 'hsla(0, 0%, 90%, 1)',
          label: 'hsla(0, 0%, 69%, 1)',
        },
        stroke: {
          DEFAULT: 'hsla(0, 0%, 90%, 1)',
          half: 'hsla(0, 0%, 90%, 0.5)',
        },
        surface: 'hsla(0, 0%, 96%, 1)',
        tertiary: 'hsla(0, 0%, 46%, 1)',

        // Purple Gradients
        'purple-light-start': '#703BE7',
        'purple-light-end': '#703BE7',
        'purple-light-overlay-start': 'rgba(255, 255, 255, 0.34)',
        'purple-light-overlay-end': 'rgba(255, 255, 255, 0)',

        'purple-lightalt-start': '#EEE2FF',
        'purple-lightalt-end': '#9747FF',

        'purple-dark-start': 'hsla(256, 100%, 66%, 1)',
        'purple-dark-end': 'hsla(256, 51%, 40%, 1)',

        'purple-deep-start': '#7F52FF',
        'purple-deep-end': '#4C3199',

        'purple-mix-start': '#7F52FF',
        'purple-mix-end': '#FB8570',

        // Gray Gradients
        'gray-soft-start': '#EDEDED',
        'gray-soft-end': '#D6D6D6',

        'soft-gray-start': 'rgba(245, 245, 249, 0)',
        'soft-gray-end': '#F5F5F9',

        'soft-gray-alt-start': 'rgba(245, 245, 249, 0)',
        'soft-gray-alt-end': '#F5F5F9',

        // White Gradients
        'white-fade-start': 'rgba(255, 255, 255, 0)',
        'white-fade-mid': '#FFFFFF',
        'white-fade-end': '#FFFFFF',

        'white-fade-alt-start': 'rgba(255, 255, 255, 0)',
        'white-fade-alt-mid': 'rgba(255, 255, 255, 0.638972)',
        'white-fade-alt-end': '#FFFFFF',

        'white-transparent-start': 'rgba(255, 255, 255, 0.41)',
        'white-transparent-end': 'rgba(0, 0, 0, 0)',

        // Complex Purple Gradients
        'purple-sky-1': '#F1EDFD',
        'purple-sky-2': '#B9AFF7',
        'purple-sky-3': '#7261EF',

        'purple-peach-start': '#703BE7',
        'purple-peach-end': '#FFA899',
      },

      gradientColorStops: (theme) => ({
        // Purple Gradients
        'purple-light-start': theme('colors.purple-deep-start'),
        'purple-light-end': theme('purple-light-end'),
        'purple-light-overlay-start': theme('purple-light-overlay-start'),
        'purple-light-overlay-end': theme('purple-light-overlay-end'),

        'purple-lightalt-start': theme('purple-lightalt-start'),
        'purple-lightalt-end': theme('purple-lightalt-end'),

        'purple-dark-start': theme('purple-dark-start'),
        'purple-dark-end': theme('purple-dark-end'),

        'purple-deep-start': theme('purple-deep-start'),
        'purple-deep-end': theme('purple-deep-end'),

        'purple-mix-start': theme('purple-mix-start'),
        'purple-mix-end': theme('purple-mix-end'),

        // Complex Purple Gradients
        'purple-sky-1': theme('purple-sky-1'),
        'purple-sky-2': theme('purple-sky-2'),
        'purple-sky-3': theme('purple-sky-3'),

        'purple-peach-start': theme('purple-peach-start'),
        'purple-peach-end': theme('purple-peach-end'),

        // Gray Gradients
        'gray-soft-start': theme('gray-soft-start'),
        'gray-soft-end': theme('gray-soft-end'),

        'soft-gray-start': theme('soft-gray-start'),
        'soft-gray-end': theme('soft-gray-end'),

        'soft-gray-alt-start': theme('soft-gray-alt-start'),
        'soft-gray-alt-end': theme('soft-gray-alt-end'),

        // White Gradients
        'white-fade-start': theme('white-fade-start'),
        'white-fade-mid': theme('white-fade-mid'),
        'white-fade-end': theme('white-fade-end'),

        'white-transparent-start': theme('white-transparent-start'),
        'white-transparent-end': theme('white-transparent-end'),
      }),
      borderWidth: {
        1.5: '1.5px',
        1.55: '1.55px',
      },
      boxShadow: {
        'shadow-xs': '0px 0px 0px 1px hsla(241, 60%, 58%, 1)',
        'shadow-sm': '0px 1.03px 2.07px 0px hsla(220, 43%, 11%, 0.05)',
        'shadow-md': '0px 1px 2px 0px hsla(222, 11%, 36%, 0.06)',
        'shadow-inset': '0px 2px 4px 0px hsla(0, 0%, 100%, 0.31) inset',
        'shadow-lg': '0px 36px 105px 0px hsla(216, 28%, 23%, 0.1)',
        'shadow-xl': '0px 6px 45px -4px hsla(258, 78%, 57%, 0.1)',
        'shadow-2xl': '0px 8px 80px 0px hsla(216, 28%, 23%, 0.08)',
        'shadow-custom': '1px 4px 30px 0px hsla(258, 63%, 52%, 0.08)',
      },
      animation: {
        slide: 'slide 35s linear infinite',
      },
      keyframes: {
        slide: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
