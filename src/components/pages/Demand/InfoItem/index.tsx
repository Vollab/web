import { IChildrenProps } from 'src/types/react.types'

import { IDemandResponse } from 'src/requests/demands/getDemand/types'

export interface IInfoItemProps extends IChildrenProps {
  title: IDemandResponse['title']
}

export const InfoItem = ({ title, children }: IInfoItemProps) => (
  <li className='flex flex-col gap-2'>
    <h2 className='text-xl font-medium'>{title}</h2>

    {children}
  </li>
)
