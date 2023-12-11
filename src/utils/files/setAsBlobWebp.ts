import { ChangeEvent } from 'react'

interface ISetAsBlobWebpParams {
  quality?: number
  event: ChangeEvent<HTMLInputElement>
  onSuccess: (webpBlobUrl: string) => void
}

type TSetAsBlobWebp = (params: ISetAsBlobWebpParams) => void

export const setAsBlobWebp: TSetAsBlobWebp = ({
  event,
  onSuccess,
  quality = 0.8
}) => {
  const file = event.target.files?.[0]

  if (!file) return

  const reader = new FileReader()

  reader.readAsArrayBuffer(file)

  reader.onload = e => {
    const result = e.target?.result

    if (result instanceof ArrayBuffer) {
      const img = new Image()

      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        canvas.width = img.width
        canvas.height = img.height

        ctx?.drawImage(img, 0, 0)

        canvas.toBlob(
          webpBlob => {
            webpBlob && onSuccess(URL.createObjectURL(webpBlob))
          },
          'image/webp',
          quality
        )
      }
    }
  }
}
