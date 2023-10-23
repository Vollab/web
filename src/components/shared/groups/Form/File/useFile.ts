import { IUseFileParams } from './types'

import { useRef, useState } from 'react'

import { IForwardModal } from 'src/components/shared/molecules/Modal/types'

export const useFile = ({ onDataUpdates }: IUseFileParams) => {
  const fileRef = useRef<HTMLInputElement>(null)
  const [cropper, setCropper] = useState<any>()
  const modalRef = useRef<IForwardModal>(null)
  const [error, setError] = useState<string>()
  const [file, setFile] = useState<any>()

  const getCropData = () => {
    const url = cropper.getCroppedCanvas().toDataURL()
    cropper && onDataUpdates && onDataUpdates(url)
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
