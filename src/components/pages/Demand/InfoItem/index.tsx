import { IChildrenProps } from 'src/types/react.types'

import { Demand } from 'types-vollab/dist/shared/demand'

export interface IInfoItemProps extends IChildrenProps {
  title: Demand['title']
}

export const InfoItem = ({ title, children }: IInfoItemProps) => (
  <li className='flex flex-col gap-2'>
    <h2 className='text-xl font-medium'>{title}</h2>

    {children}
  </li>
)
