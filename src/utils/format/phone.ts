export const formatPhone = (value: string) => {
  let formattedValue = value.replace(/\D/g, '')

  if (formattedValue.length > 2) {
    formattedValue = `(${formattedValue.slice(0, 2)}) ${formattedValue.slice(
      2
    )}`
  }

  if (formattedValue.length > 12) {
    formattedValue = `${formattedValue.slice(0, 10)}-${formattedValue.slice(
      10
    )}`
  }

  return formattedValue
}
