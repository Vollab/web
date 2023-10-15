import { colors } from 'src/styles/custom/colors'

import { TButtonProps } from 'src/types/react.types'

export interface IButtonProps extends TButtonProps {
  color?: keyof typeof colors
}
