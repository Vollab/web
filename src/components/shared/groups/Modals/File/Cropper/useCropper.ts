import { IUseCropperParams } from './types'

export const useCropper = ({ cropper }: IUseCropperParams) => {
  const onZoomIn = () => {
    cropper?.zoom(0.1)
  }

  const onZoomOut = () => {
    cropper?.zoom(-0.1)
  }

  return { onZoomIn, onZoomOut }
}
