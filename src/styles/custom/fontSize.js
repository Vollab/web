const { generateFontSizes } = require('./utils/fontSizes')

const increaseLineHeight = 0.2

const defaults = {
  xs: '1.0rem',
  sm: '1.2rem',
  md: '1.4rem',
  lg: '1.6rem',
  xl: '1.8rem',
  h6: '2.0rem',
  h5: '2.4rem',
  h4: '3rem',
  h3: '3.4rem',
  h2: '2.8rem',
  h1: '4.2rem'
}

const responsive = [{ screen: [320, 768], sizes: [['xs', 'h1']] }]

module.exports = generateFontSizes(defaults, responsive, increaseLineHeight)
