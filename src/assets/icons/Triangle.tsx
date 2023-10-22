import { SVG } from 'src/components/shared/atoms/SVG'

import { IIconProps } from 'src/types/icons.types'

export const Triangle = ({ fill, className }: IIconProps) => (
  <SVG viewBox='0 0 236 246' className={className}>
    <path
      d='M-8.10162 47.6645C-14.6571 20.1238 10.1241 -4.65738 37.6648 1.8981L206.041 41.9764C234.962 48.8604 245.133 84.7918 224.112 105.814L95.8139 234.111C74.7922 255.133 38.8607 244.962 31.9767 216.04L-8.10162 47.6645Z'
      fill='url(#paint0_linear_51_109)'
      fillOpacity='0.2'
    />

    <defs>
      <linearGradient
        id='paint0_linear_51_109'
        x1='6.94716'
        y1='5.43833'
        x2='209.228'
        y2='151.583'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='white' />
        <stop offset='1' stopColor='white' stopOpacity='0' />
      </linearGradient>
    </defs>
  </SVG>
)
