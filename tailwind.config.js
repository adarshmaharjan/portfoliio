/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
  theme: {
    extend: {
      colors: {
        // 'primary-dark': '#000033',
        // 'primary-torquoise': '#00F2F2',
        // 'primary-blue': '#145AFF',
        // 'secondary-green': '#14CC70',
        // 'gray-100': '#F0F0F0',
        // 'gray-80:': '#F5F5F5',
        // 'gray-60': '#D6D6D6',
        // 'secondary-red': '#FF6B57',
      },
      fontFamily: {
        header: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        base: [
          '1rem',
          {
            letterSpacing: '0.01em',
            lineHeight: '24px',
          },
        ],

        lg: [
          '0.875rem',
          {
            letterSpacing: '0.01em',
            lineHeight: '1.5',
          },
        ],
        body: [
          // paragraph size
          '1rem',
          {
            lineHeight: '24px',
            letterSpacing: '0.01em',
          },
        ],
        xl: [
          '1.125rem',
          {
            lineHeight: '1.4',
          },
        ],
        '2xl': [
          '1.5rem',
          {
            lineHeight: '1.4',
            letterSpacing: '-0.005em',
          },
        ],
        '3xl': [
          '2.5rem',
          {
            lineHeight: '1.3',
            letterSpacing: '-0.015em',
          },
        ],
        '4xl': [
          '3rem',
          {
            lineHeight: '1.5',
            letterSpacing: '-0.02em',
          },
        ],
      },
    },
  },
  plugins: [
    // function ({ addComponents }) {
    //   //remove container max-width of tailwind and added ours
    //   addComponents({
    //     '.container': {
    //       maxWidth: '100%',
    //       marginLeft: 'auto',
    //       marginRight: 'auto',
    //       paddingLeft: '15px',
    //       paddingRight: '15px',

    //       '@screen sm': {
    //         maxWidth: '640px',
    //         paddingLeft: '15px',
    //         paddingRight: '15px',
    //       },
    //       '@screen md': {
    //         maxWidth: '768px',
    //         paddingLeft: '20px',
    //         paddingRight: '20px',
    //       },
    //       '@screen lg': {
    //         maxWidth: '1024px',
    //         paddingLeft: '32px',
    //         paddingRight: '32px',
    //       },
    //       '@screen xl': {
    //         maxWidth: '1440px',
    //         paddingLeft: '135px',
    //         paddingRight: '135px',
    //       },
    //     },
    //   });
    // },
    daisyui,
  ],
};
