export const errorToToast = (
  mapping: [string, string][],
  errors?: { message: string }[]
) =>
  errors?.map(({ message }) => {
    const translation = mapping.find(
      ([backendError]) => backendError.toLowerCase() === message.toLowerCase()
    )

    if (translation) return { content: translation[1] }
    else return {}
  })
