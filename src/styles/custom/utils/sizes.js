const { generateClamp, remToNumber } = require('./index')

const generateClamps = (screen, keysFromTo) => {
  const minWidthPx = screen[0]
  const maxWidthPx = screen[1]
  const minSizeRem = remToNumber(keysFromTo[0])
  const maxSizeRem = remToNumber(keysFromTo[1])

  const size = `${minSizeRem}To${maxSizeRem}`
  const screens = `${minWidthPx}x${maxWidthPx}`
  const name = `${size}_${screens}`

  const generatedValues = {}

  const generatedSize = generateClamp(
    minWidthPx,
    maxWidthPx,
    minSizeRem,
    maxSizeRem
  )

  generatedValues[name] = generatedSize

  return generatedValues
}

const generateResponsiveSizes = (defaults, responsive) => {
  const responsiveSizes = {}

  responsive.forEach(({ screen, sizes }) =>
    sizes.forEach(size => {
      const object = generateClamps(screen, size)

      Object.assign(responsiveSizes, object)
    })
  )

  return { ...defaults, ...responsiveSizes }
}

module.exports = { generateResponsiveSizes }
