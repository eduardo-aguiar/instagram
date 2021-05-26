const plugin = require('tailwindcss/plugin')



module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        keyframes: {
            ani: {
                '100%': {
                    opacity: '1'
                }
               }
        },
        animation: {
            ani: 'ani 0.75s ease-out 4s forwards',
            ani2: 'ani 2s ease-out 6s forwards',
        },
        fontFamily: {
          poppins: ['Poppins']
        }
    },
},
  variants: {
      scale: ['group-hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.scale15': {
          transform: 'scale(1.5)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}
