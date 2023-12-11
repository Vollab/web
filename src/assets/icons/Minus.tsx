import { SVG } from 'src/components/shared/atoms/SVG'

import { IIconProps } from 'src/types/icons.types'

export const Minus = ({ fill, className }: IIconProps) => (
  <SVG viewBox='0 0 12 4' className={className}>
    <path
      fill={fill}
      d='M0 2.66669V1.33335C0 0.933354 0.266667 0.666687 0.666667 0.666687H11.3333C11.7333 0.666687 12 0.933354 12 1.33335V2.66669C12 3.06669 11.7333 3.33335 11.3333 3.33335H0.666667C0.266667 3.33335 0 3.06669 0 2.66669Z'
    />
  </SVG>
)
