const breakpoints = require('./breakpoints')
const { generateResponsiveSizes } = require('./utils/sizes')

const defaults = {
  ...breakpoints,
  px: '1px',
  0: 0,
  1: '4px',
  1.5: '6px',
  2: '8px',
  3: '12px',
  3.5: '14px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  10: '40px',
  11: '44px',
  12: '48px',
  13: '52px',
  14: '56px',
  14.5: '58px',
  15: '60px',
  16: '64px',
  18: '72px',
  20: '80px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  35: '140px',
  40: '160px',
  48: '192px',
  56: '224px',
  52: '208px',
  64: '256px',
  100: '400px'
}

const responsive = [{ screen: [320, 768], sizes: [['1.6rem', '4.2rem']] }]

module.exports = generateResponsiveSizes(defaults, responsive)
