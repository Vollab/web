import { IVariants, variants } from './variants'

import { TButtonProps } from 'src/types/react.types'

export interface IButtonProps extends Omit<TButtonProps, 'color'>, IVariants {}

export const Button = ({
  color,
  variant,
  children,
  className,
  ...props
}: IButtonProps) => (
  <button
    type='button'
    className={color ? variants({ color, variant, className }) : className}
    {...props}
  >
    {children}
  </button>
)
