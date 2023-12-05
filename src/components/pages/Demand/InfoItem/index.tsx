import { IDemandResponse } from 'src/requests/demands/demand'

import { IChildrenProps } from 'src/types/react.types'

export interface IInfoItemProps extends IChildrenProps {
  title: IDemandResponse['demand']['title']
}

export const InfoItem = ({ title, children }: IInfoItemProps) => (
  <li className='flex flex-col gap-2'>
    <h2 className='text-xl font-medium'>{title}</h2>

    {children}
  </li>
)
