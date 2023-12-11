import { SVG } from 'src/components/shared/atoms/SVG'

import { IIconProps } from 'src/types/icons.types'

export const Plus = ({ fill, className }: IIconProps) => (
  <SVG viewBox='0 0 12 12' className={className}>
    <path
      d='M0 6.66667V5.33333C0 4.93333 0.266667 4.66667 0.666667 4.66667H11.3333C11.7333 4.66667 12 4.93333 12 5.33333V6.66667C12 7.06667 11.7333 7.33333 11.3333 7.33333H0.666667C0.266667 7.33333 0 7.06667 0 6.66667Z'
      fill={fill}
    />
    <path
      d='M6.66667 12H5.33333C4.93333 12 4.66667 11.7333 4.66667 11.3333V0.666667C4.66667 0.266667 4.93333 0 5.33333 0H6.66667C7.06667 0 7.33333 0.266667 7.33333 0.666667V11.3333C7.33333 11.7333 7.06667 12 6.66667 12Z'
      fill={fill}
    />
  </SVG>
)
