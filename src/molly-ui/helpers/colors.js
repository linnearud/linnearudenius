export const getForeground = color => {
  if (!color) return 'black'
  const rgbColor = hexToRgb(color)
  const luminance = getLuminance(rgbColor.r, rgbColor.g, rgbColor.b)
  return luminance > 0.4 ? 'black' : 'white'
}

export const getLightVariant = color => {
  return lightenDarkenColor(color, 40)
}

export const getDarkVariant = color => {
  return lightenDarkenColor(color, -30)
}

const lightenDarkenColor = (color, amount) => {
  var rgbColor = hexToRgb(color)

  return rgbToHex(
    clamp(rgbColor.r + amount),
    clamp(rgbColor.g + amount),
    clamp(rgbColor.b + amount)
  )
}

const clamp = num => {
  return num <= 0 ? 0 : num >= 255 ? 255 : num
}

const getLuminance = (r, g, b) => {
  const linearRgb = sRgbToLinearRgb(r, g, b)
  return 0.2126 * linearRgb.r + 0.7152 * linearRgb.g + 0.0722 * linearRgb.b
}

const hexToRgb = hexColor => {
  const rgbColor = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor)
  return rgbColor
    ? {
        r: parseInt(rgbColor[1], 16),
        g: parseInt(rgbColor[2], 16),
        b: parseInt(rgbColor[3], 16),
      }
    : null
}

const rgbToHex = (r, g, b) => {
  const redComponent = (r.toString(16).length === 1 ? '0' : '') + r.toString(16)
  const greenComponent = (g.toString(16).length === 1 ? '0' : '') + g.toString(16)
  const blueComponent = (b.toString(16).length === 1 ? '0' : '') + b.toString(16)

  return '#' + redComponent + greenComponent + blueComponent
}

const sRgbToLinearRgb = (r, g, b) => {
  return {
    r: r / 255.0 <= 0.03928 ? r / 3294.6 : Math.pow((r / 255.0 + 0.055) / 1.055, 2.4),
    g: g / 255.0 <= 0.03928 ? g / 3294.6 : Math.pow((g / 255.0 + 0.055) / 1.055, 2.4),
    b: b / 255.0 <= 0.03928 ? b / 3294.6 : Math.pow((b / 255.0 + 0.055) / 1.055, 2.4),
  }
}
