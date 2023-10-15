import { SVGProps } from 'react'

export const SVG = ({
  fill,
  children,
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    className={`overflow-hidden ${className}`}
    {...props}
    fill={fill || 'none'}
    xmlns='http://www.w3.org/2000/svg'
  >
    {children}
  </svg>
)
