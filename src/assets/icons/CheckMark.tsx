import { SVG } from 'src/components/shared/atoms/SVG'

import { IIconProps } from 'src/types/icons.types'

export const CheckMark = ({ fill, className }: IIconProps) => (
  <SVG viewBox='0 0 6 6' className={className}>
    <path
      d='M5.25691 0.195884C5.42042 -0.0504007 5.67354 -0.0620152 5.8659 0.147327C6.05826 0.356669 6.03018 0.681398 5.86667 0.927683L2.86245 5.79377C2.69638 6.04392 2.40212 6.07027 2.21046 5.85216L0.153431 3.51109C-0.0352601 3.29634 -0.0522564 2.92641 0.115469 2.68482C0.283194 2.44324 0.572126 2.42147 0.760817 2.63622L2.46854 4.57975L5.25691 0.195884Z'
      fill={fill}
    />
  </SVG>
)
