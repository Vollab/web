const remToNumber = text => Number(text.split('r')[0])
const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1)

const generateClamp = (
  minScreenSizePx,
  maxScreenSizePx,
  minSizeRemNumber,
  maxSizeRemNumber
) => {
  const pixelsPerRem = 10

  const minWidth = minScreenSizePx / pixelsPerRem
  const maxWidth = maxScreenSizePx / pixelsPerRem
  const minSize = minSizeRemNumber
  const maxSize = maxSizeRemNumber

  const slope = (maxSize - minSize) / (maxWidth - minWidth)
  const yAxisIntersection = -minWidth * slope + minSize

  const first = `${minSize}rem`
  const second = `${yAxisIntersection.toFixed(4)}rem`
  const third = `${(slope * 100).toFixed(4)}vw`
  const fourth = `${maxSize}rem`

  return `clamp(${first}, ${second} + ${third}, ${fourth})`
}

module.exports = { generateClamp, remToNumber, capitalize }
