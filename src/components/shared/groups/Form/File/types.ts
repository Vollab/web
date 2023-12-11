import { ReactNode } from 'react'

import { IClassNameProps } from 'src/types/react.types'

type TOnDataUpdates = (params: {
  url: string
  file?: any
  sizes: { width: number; height: number }
}) => void

export interface IFileProps extends IClassNameProps {
  name: string
  maxMb?: number
  noCropper?: boolean
  children?: ReactNode
  onClick?: () => void
  onDataUpdates: TOnDataUpdates
}

export interface IUseFileParams {
  onDataUpdates: IFileProps['onDataUpdates']
  maxMb: IFileProps['maxMb']
}
