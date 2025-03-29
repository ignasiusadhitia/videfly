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
        stroke: 'hsla(0, 0%, 90%, 1)',
        surface: 'hsla(0, 0%, 96%, 1)',
        tertiary: 'hsla(0, 0%, 46%, 1)',
        gradients: {
          purpleLight:
            'linear-gradient(0deg, #703BE7, #703BE7), linear-gradient(180deg, rgba(255, 255, 255, 0.34) 0%, rgba(255, 255, 255, 0) 100%)',
          purpleLightAlt:
            'linear-gradient(185.48deg, #EEE2FF 17.78%, #9747FF 95.62%)',
          purpleDeep: 'linear-gradient(109.89deg, #7F52FF 1.07%, #4C3199 100%)',
          purpleMix: 'linear-gradient(109.89deg, #7F52FF 1.07%, #FB8570 100%)',
          graySoft: 'linear-gradient(180deg, #EDEDED 0%, #D6D6D6 100%)',
          softGray:
            'linear-gradient(182.84deg, rgba(245, 245, 249, 0) 2.36%, #F5F5F9 55.82%)',
          softGrayAlt:
            'linear-gradient(182.84deg, rgba(245, 245, 249, 0) 2.36%, #F5F5F9 56.12%)',
          whiteFade:
            'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 46.27%, #FFFFFF 100%)',
          whiteTransparent:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.41) 0%, rgba(0, 0, 0, 0) 100%)',
          purpleSky:
            'linear-gradient(315.94deg, #F1EDFD -8.05%, #B9AFF7 32.61%, #7261EF 99.96%)',
          purpleSkyAlt:
            'linear-gradient(329.07deg, #F1EDFD 24.27%, #B9AFF7 51.81%, #7261EF 69.92%)',
          purplePeach:
            'linear-gradient(89.94deg, #703BE7 14.01%, #FFA899 91.74%)',
        },
      },
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
    },
  },
  plugins: [],
};
