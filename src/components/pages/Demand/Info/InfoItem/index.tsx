import { AddButton } from 'src/components/shared/groups/Buttons/AddButton'

import { IChildrenProps, TButtonProps } from 'src/types/react.types'

export interface IInfoItemProps extends IChildrenProps {
  title: string
  onAddClick?: TButtonProps['onClick']
}

export const InfoItem = ({ title, children, onAddClick }: IInfoItemProps) => (
  <li className='flex flex-col gap-2 relative'>
    <div className='flex items-center justify-between'>
      <h2 className='text-xl font-medium'>{title}</h2>

      {onAddClick && <AddButton onClick={onAddClick} />}
    </div>

    {children}
  </li>
)
