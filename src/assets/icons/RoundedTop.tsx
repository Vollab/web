import { SVG } from 'src/components/shared/atoms/SVG'

import { IIconProps } from 'src/types/icons.types'

export const RoundedTop = ({ fill, className }: IIconProps) => (
  <SVG
    viewBox='0 0 500 42'
    className={`w-[102vw] absolute top-0 -translate-x-[1vw] -translate-y-[100%]  ${className}`}
  >
    <path d='M0 43 h500 s-91 -42 -250 -42-250 42 -250 42z' fill={fill} />
  </SVG>
)
