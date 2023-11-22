export const transformToArray = (array: any[]) => {
  const newArray: any[] = []

  if (!Array.isArray(array)) newArray.push(array)
  else array.map(array => newArray.push(array))

  return newArray
}
