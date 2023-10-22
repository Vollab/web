import { TButtonProps } from 'src/types/react.types'
import { TColors } from 'src/types/styles.types'

export interface IButtonProps extends TButtonProps {
  color?: TColors
  variant?: 'primary' | 'secondary'
}
