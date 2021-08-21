module.exports = {
  purge: {
    enabled: true,
    content: ['./app/**/*.html', './app/**/*.ejs'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#630834',
        secondary: '#E31277',
        purple: '#190014CC',
        white: '#ffffff',
        black: '#000000',
        gray: {
          100: '#EFEFEF',
          200: '#E9ECEF ',
          300: '#CED4DA',
          400: '#707070',
          500: '#373A3C'
        }
      },
      fontSize: {
        'xs': '.75rem',   // 12px
        'sm': '.875rem',  // 14px
        'base': '1rem',   // 16px
        'md': '1.25rem',  // 20px
        'lg': '1.375rem', // 22px
        'xl': '1.5rem',   // 24px
        '2xl': '1.75rem', // 28px
        '3xl': '2rem',    // 32px
        '4xl': '2.25rem', // 36px
        '5xl': '2.5rem',  // 40px
        '6xl': '2.75rem'  // 44px
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px'
      },
      spacing: {
        '3.5': '0.875rem',
        '4.5': '1.125rem',
        '7.5': '1.875rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '16.25': '4.0625rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '40': '10rem',
        '54.5': '13.625rem'
      },
      height: {
        '21': '5.25rem',
        '100': '25rem',
        '140': '35rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
