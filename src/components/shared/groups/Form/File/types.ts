import { IChildrenProps } from 'src/types/react.types'

import { ReactCropperProps } from 'react-cropper'

export interface IFileProps extends ReactCropperProps, IChildrenProps {
  name: string
  label: string
  maxSize?: string
  noCropper?: boolean
  onClick?: () => void
  onDataUpdates?: (fileData?: string) => void
}

export interface IUseFileParams {
  onDataUpdates: IFileProps['onDataUpdates']
}