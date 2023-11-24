import { IUseFileParams } from './types'

import { useRef, useState } from 'react'

import { IForwardModal } from 'src/components/shared/molecules/Modal/types'

import Cropper from 'cropperjs'

export const useFile = ({ onDataUpdates }: IUseFileParams) => {
  const [cropper, setCropper] = useState<Cropper>()
  const fileRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<IForwardModal>(null)
  const [error, setError] = useState<string>()
  const [file, setFile] = useState<any>()

  const getCropData = () => {
    const canvas = cropper?.getCroppedCanvas()
    const url = canvas?.toDataURL()

    const formData = new FormData()

    canvas?.toBlob(blob => {
      blob && formData.append('avatar', blob)
    })

    onDataUpdates && onDataUpdates({ url: url || '', formData })
  }

  const onChange = (e: any) => {
    e.preventDefault()
    setError(undefined)

    const file = e.target.files[0]

    if (file.size < 5242880) {
      const reader = new FileReader()

      reader.readAsDataURL(file)
      reader.onload = () => setFile(reader.result)
    } else setError('O arquivo é muito grande!')
  }

  return { file, error, fileRef, modalRef, onChange, setCropper, getCropData }
}
