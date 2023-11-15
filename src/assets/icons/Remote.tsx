import { SVG } from 'src/components/shared/atoms/SVG'

import { IIconProps } from 'src/types/icons.types'

export const Remote = ({ className, fill }: IIconProps) => (
  <SVG className={className} viewBox='0 0 20 22'>
    <path
      id='Vector'
      d='M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H9V18H7V20H15V18H13V16H20C20.5304 16 21.0391 15.7893 21.4142 15.4142C21.7893 15.0391 22 14.5304 22 14V2C22 1.46957 21.7893 0.960859 21.4142 0.585786C21.0391 0.210714 20.5304 0 20 0M2 2H20V14H2M14 3L10.5 6.5L14 10L15.4 8.6L13.3 6.5L15.4 4.4M8 6L6.6 7.4L8.7 9.5L6.6 11.6L8 13L11.5 9.5'
      fill={fill}
    />
  </SVG>
)