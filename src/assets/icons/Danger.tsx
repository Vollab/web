import { SVG } from 'src/components/shared/atoms/SVG'

import { IIconProps } from 'src/types/icons.types'

export const Danger = ({ fill, className }: IIconProps) => (
  <SVG viewBox='0 0 24 24' className={className}>
    <path
      fill={fill}
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.4773 4.44209L21.746 17.0572C21.906 17.4338 21.976 17.7399 21.996 18.058C22.036 18.8012 21.776 19.5236 21.2661 20.0795C20.7562 20.6334 20.0663 20.9604 19.3164 21H4.6789C4.36896 20.9812 4.05901 20.9108 3.76906 20.8018C2.3193 20.2172 1.61942 18.5723 2.20932 17.1464L9.52809 4.43317C9.77804 3.98628 10.158 3.60082 10.6279 3.35309C11.9877 2.59902 13.7174 3.09447 14.4773 4.44209ZM12.8675 12.7557C12.8675 13.2314 12.4776 13.6287 11.9977 13.6287C11.5178 13.6287 11.1178 13.2314 11.1178 12.7557V9.95248C11.1178 9.47585 11.5178 9.09039 11.9977 9.09039C12.4776 9.09039 12.8675 9.47585 12.8675 9.95248V12.7557ZM11.9977 17.0176C11.5178 17.0176 11.1178 16.6202 11.1178 16.1456C11.1178 15.669 11.5178 15.2726 11.9977 15.2726C12.4776 15.2726 12.8675 15.6601 12.8675 16.1347C12.8675 16.6202 12.4776 17.0176 11.9977 17.0176Z'
    />
  </SVG>
)