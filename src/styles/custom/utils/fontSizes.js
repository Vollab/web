const { generateClamp, remToNumber, capitalize } = require('./index')

const generateLineHeight = (object, increaseLineHeight) => {
  const transformedDefaults = {}

  for (const key in object) {
    const value = object[key]

    transformedDefaults[key] = [
      value,
      (remToNumber(value) + increaseLineHeight).toFixed(1) + 'rem'
    ]
  }

  return transformedDefaults
}

const generateClamps = (screen, keysFromTo, fontSizes) => {
  const sizes = {
    screen: { min: screen[0], max: screen[1] },
    font: {
      min: remToNumber(fontSizes[keysFromTo[0]][0]),
      max: remToNumber(fontSizes[keysFromTo[1]][0])
    },
    line: {
      min: remToNumber(fontSizes[keysFromTo[0]][1]),
      max: remToNumber(fontSizes[keysFromTo[1]][1])
    }
  }

  const font = `${keysFromTo[0]}To${capitalize(keysFromTo[1])}`
  const screens = `${sizes.screen.min}x${sizes.screen.max}`
  const name = `${font}_${screens}`

  const generatedValues = {}

  const fontSize = generateClamp(
    sizes.screen.min,
    sizes.screen.max,
    sizes.font.min,
    sizes.font.max
  )

  const lineHeight = generateClamp(
    sizes.screen.min,
    sizes.screen.max,
    sizes.line.min,
    sizes.line.max
  )

  generatedValues[name] = [fontSize, lineHeight]

  return generatedValues
}

const generateFontSizes = (defaults, responsive, increaseLineHeight) => {
  const fontSizesWithLineHeight = {
    ...generateLineHeight(defaults, increaseLineHeight)
  }

  const responsiveFontSizes = {}

  responsive.forEach(({ screen, sizes }) =>
    sizes.forEach(size => {
      const object = generateClamps(screen, size, fontSizesWithLineHeight)

      Object.assign(responsiveFontSizes, object)
    })
  )

  return { ...fontSizesWithLineHeight, ...responsiveFontSizes }
}

module.exports = { generateFontSizes }
