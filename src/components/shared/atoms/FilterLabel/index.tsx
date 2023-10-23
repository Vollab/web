import { Button } from '../Button'

import { colors } from 'src/styles/custom/colors'
import sizes from 'src/styles/custom/sizes'

import { Close } from 'src/assets/icons'

import { IClassNameProps, TButtonProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

interface IFilterLabelProps extends IClassNameProps {
  title: string
  onRemoveClick?: TButtonProps['onClick']
}

export const FilterLabel = ({
  title,
  className,
  onRemoveClick
}: IFilterLabelProps) => (
  <li
    className={twMerge(
      'bg-secondary-500 rounded-lg flex items-center justify-center m-1',
      className
    )}
  >
    <span
      className='text-gray-50 pl-3'
      style={{
        paddingTop: onRemoveClick ? undefined : sizes[2],
        paddingRight: onRemoveClick ? undefined : sizes[3],
        paddingBottom: onRemoveClick ? undefined : sizes[2]
      }}
    >
      {title}
    </span>

    {onRemoveClick && (
      <Button className='pr-3 pl-2 py-2' onClick={onRemoveClick}>
        <Close fill={colors.gray[50]} className='h-3 w-3' />
      </Button>
    )}
  </li>
)
