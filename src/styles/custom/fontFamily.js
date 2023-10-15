const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  primary: ['var(--poppins-font)', ...fontFamily.sans],
  serif: ['var(--poppins-font)', ...fontFamily.serif]
}
