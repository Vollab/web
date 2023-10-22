import { SVG } from 'src/components/shared/atoms/SVG'

import { IIconProps } from 'src/types/icons.types'

export const AddPhoto = ({ className, fill }: IIconProps) => (
  <SVG className={className} viewBox='0 0 20 23'>
    <path
      d='M2.5 20C1.95 20 1.47933 19.8043 1.088 19.413C0.696 19.021 0.5 18.55 0.5 18V6C0.5 5.45 0.696 4.97933 1.088 4.588C1.47933 4.196 1.95 4 2.5 4H5.65L7.5 2H13.5V6H16.5V9H20.5V18C20.5 18.55 20.3043 19.021 19.913 19.413C19.521 19.8043 19.05 20 18.5 20H2.5ZM10.5 16.5C11.75 16.5 12.8127 16.0627 13.688 15.188C14.5627 14.3127 15 13.25 15 12C15 10.75 14.5627 9.68733 13.688 8.812C12.8127 7.93733 11.75 7.5 10.5 7.5C9.25 7.5 8.18733 7.93733 7.312 8.812C6.43733 9.68733 6 10.75 6 12C6 13.25 6.43733 14.3127 7.312 15.188C8.18733 16.0627 9.25 16.5 10.5 16.5ZM10.5 14.5C9.8 14.5 9.20833 14.2583 8.725 13.775C8.24167 13.2917 8 12.7 8 12C8 11.3 8.24167 10.7083 8.725 10.225C9.20833 9.74167 9.8 9.5 10.5 9.5C11.2 9.5 11.7917 9.74167 12.275 10.225C12.7583 10.7083 13 11.3 13 12C13 12.7 12.7583 13.2917 12.275 13.775C11.7917 14.2583 11.2 14.5 10.5 14.5ZM18.5 6V4H16.5V2H18.5V0H20.5V2H22.5V4H20.5V6H18.5Z'
      fill={fill}
    />
  </SVG>
)
