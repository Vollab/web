import { TSetState } from 'src/types/react.types'

import { ReactCropperElement } from 'react-cropper'

export interface IFileModalProps {
  src: string
  closeModal: () => void
  onReloadClick: () => void
  onConfirmClick: () => void
  cropper?: ReactCropperElement['cropper']
  setCropper: TSetState<IFileModalProps['cropper']>
}
