import { IUseFileParams } from './types'

import { useRef, useState } from 'react'

import { IForwardModal } from 'src/components/shared/molecules/Modal/types'

import { TInputProps } from 'src/types/react.types'

import { setAsBase64 } from 'src/utils/files/setAsBase64'

export const useFile = ({ onDataUpdates, maxMb }: IUseFileParams) => {
  const [file, setFile] = useState<string>()
  const modalRef = useRef<IForwardModal>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [cropper, setCropper] = useState<Cropper>()
  const [isReloading, setIsReloading] = useState(false)

  const onLabelClick = () => {
    modalRef.current?.triggerModal({ open: true })

    addEventListener('focus', () => {
      setTimeout(() => {
        if (!inputRef.current?.files?.[0])
          modalRef.current?.triggerModal({ open: false })
      }, 300)
    })
  }

  const closeModal = () => {
    modalRef.current?.triggerModal({ open: false })
  }

  const onInputChange: TInputProps['onChange'] = event => {
    const file = inputRef.current?.files?.[0]

    if (!file) {
      modalRef.current?.triggerModal({ open: false })
      return
    }

    setAsBase64({
      event,
      maxMB: maxMb,
      onSuccess: blob => {
        setFile(blob)
        isReloading && cropper?.replace(blob)
      }
    })
  }

  const onConfirmClick = () => {
    closeModal()

    if (!cropper || !file) {
      modalRef.current?.triggerModal({ open: false })
      return
    }

    const croppedCanvas = cropper.getCroppedCanvas()

    croppedCanvas.toBlob(
      blob => {
        blob &&
          onDataUpdates({
            url: URL.createObjectURL(blob),
            sizes: {
              width: croppedCanvas.width,
              height: croppedCanvas.height
            }
          })
      },
      'image/webp',
      0.8
    )
  }

  const onReloadClick = () => {
    setIsReloading(true)
    inputRef.current?.click()
  }

  return {
    file,
    cropper,
    inputRef,
    modalRef,
    setCropper,
    closeModal,
    onLabelClick,
    onReloadClick,
    onInputChange,
    onConfirmClick
  }
}
