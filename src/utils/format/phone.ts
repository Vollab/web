export const formatPhone = (value: string) => {
  let formattedValue = value.replace(/\D/g, '')

  if (formattedValue.length > 2) {
    formattedValue = `(${formattedValue.slice(0, 2)}) ${formattedValue.slice(
      2
    )}`
  }

  if (formattedValue.length > 7) {
    formattedValue = `${formattedValue.slice(0, 6)} ${formattedValue.slice(6)}`
  }

  if (formattedValue.length > 12) {
    formattedValue = `${formattedValue.slice(0, 11)}-${formattedValue.slice(
      11
    )}`
  }

  return formattedValue
}
