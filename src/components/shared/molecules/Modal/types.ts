import { HTMLAttributes } from 'react'

import { TButtonProps } from 'src/types/react.types'

interface IModalState {
  open: boolean
  [key: string]: any
}

export interface IForwardModal {
  triggerModal: (props: IModalState) => void
}

export interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  children?: any
  onBackgroundClick?: TButtonProps['onClick']
}
