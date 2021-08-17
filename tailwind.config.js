module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#630834',
        secondary: '#E31277',
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
        '5xl': '2.5rem'   // 40px
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
        '15': '3.75rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
