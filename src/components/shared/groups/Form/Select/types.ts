import { IChildrenProps } from 'src/types/react.types'
import { TColors } from 'src/types/styles.types'

import { Props } from 'react-select'

export interface ISelectOption {
  value: string
  label: string
}

export interface ISelectProps
  extends Omit<Props, 'options' | 'onChange'>,
    IChildrenProps {
  color?: TColors
  options: ISelectOption[]
  onChange?: (option: ISelectOption) => void
}

export interface IUseSelectParams {
  color: TColors
}
