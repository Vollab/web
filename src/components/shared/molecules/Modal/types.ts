import { HTMLAttributes } from 'react'

import { IClassNameProps, TButtonProps } from 'src/types/react.types'

interface IModalState {
  open: boolean
  [key: string]: any
}

export interface IForwardModal {
  triggerModal: (props: IModalState) => void
}

export interface IModalProps
  extends HTMLAttributes<HTMLDivElement>,
    IClassNameProps {
  onBackgroundClick?: TButtonProps['onClick']
}
