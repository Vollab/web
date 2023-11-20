import { IChildrenProps } from 'src/types/react.types'

import { DemandResponse } from 'types-vollab/dist/routes/demands/id'

export interface IInfoItemProps extends IChildrenProps {
  title: DemandResponse['title']
}

export const InfoItem = ({ title, children }: IInfoItemProps) => (
  <li className='flex flex-col gap-2'>
    <h2 className='text-xl font-medium'>{title}</h2>

    {children}
  </li>
)
