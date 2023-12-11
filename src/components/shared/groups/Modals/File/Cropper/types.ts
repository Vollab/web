import { IFileModalProps } from '../types'

export interface ICropperProps {
  src: IFileModalProps['src']
  cropper: IFileModalProps['cropper']
  setCropper: IFileModalProps['setCropper']
}

export interface IUseCropperParams {
  cropper: ICropperProps['cropper']
}
