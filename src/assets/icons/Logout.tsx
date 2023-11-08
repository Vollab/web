import { SVG } from 'src/components/shared/atoms/SVG'

import { IIconProps } from 'src/types/icons.types'

export const Logout = ({ className, fill }: IIconProps) => (
  <SVG className={className} viewBox='0 0 18 18'>
    <path
      d='M9 17C6.87827 17 4.84344 16.1571 3.34315 14.6569C1.84285 13.1566 1 11.1217 1 9C1 6.87827 1.84285 4.84344 3.34315 3.34315C4.84344 1.84285 6.87827 1 9 1'
      stroke={fill}
      stroke-width='1.5'
      stroke-linecap='round'
    />

    <path
      d='M7 9H17M17 9L14 6M17 9L14 12'
      stroke={fill}
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </SVG>
)
