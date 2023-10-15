import { IChildrenProps } from 'src/types/react.types'

import { Props } from 'react-select'

interface ISelectOption {
  value: string
  label: string
}

export interface ISelectProps extends Omit<Props, 'options'>, IChildrenProps {
  options: ISelectOption[]
}
