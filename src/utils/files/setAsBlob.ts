import { ChangeEvent } from 'react'

interface ISetAsBlobParams {
  maxMB?: number
  event: ChangeEvent<HTMLInputElement>
  onSuccess: (blob: string) => void
}

type TSetAsBlob = (params: ISetAsBlobParams) => void

export const setAsBlob: TSetAsBlob = ({ event, onSuccess, maxMB = 2 }) => {
  const file = event.target.files?.[0]

  if (!file) return

  if (file.size < maxMB * 1048576) {
    const reader = new FileReader()

    reader.readAsArrayBuffer(file)

    reader.onload = e => {
      const result = e.target?.result

      if (result instanceof ArrayBuffer) {
        const blob = new Blob([result])

        onSuccess(URL.createObjectURL(blob))
      }
    }
  }
}
