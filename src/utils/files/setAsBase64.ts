import { ChangeEvent } from 'react'

interface ISetAsBlobParams {
  maxMB?: number
  event: ChangeEvent<HTMLInputElement>
  onSuccess: (url: string) => void
}

type TSetAsBlob = (params: ISetAsBlobParams) => void

export const setAsBase64: TSetAsBlob = ({ event, onSuccess, maxMB = 5 }) => {
  const file = event.target.files?.[0]

  if (!file) return

  if (file.size < maxMB * 1048576) {
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = e => {
      const result = e.target?.result

      if (typeof result === 'string') onSuccess(result)
    }
  }
}
