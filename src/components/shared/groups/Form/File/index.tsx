import { IFileProps } from './types'

import { FileModal } from '../../Modals/File'
import { useFile } from './useFile'

import 'cropperjs/dist/cropper.css'

export const File = ({
  name,
  children,
  maxMb = 2,
  className,
  onDataUpdates
}: IFileProps) => {
  const {
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
  } = useFile({ onDataUpdates, maxMb })

  return (
    <>
      <label className={'cursor-pointer ' + className} onClick={onLabelClick}>
        {children}

        <input
          type='file'
          name={name}
          ref={inputRef}
          onChange={onInputChange}
          style={{ display: 'none' }}
          accept='image/jpeg, image/png, image/gif, image/webp'
        />
      </label>

      <FileModal
        ref={modalRef}
        cropper={cropper}
        src={file as string}
        closeModal={closeModal}
        setCropper={setCropper}
        onReloadClick={onReloadClick}
        onConfirmClick={onConfirmClick}
      />
    </>
  )
}
