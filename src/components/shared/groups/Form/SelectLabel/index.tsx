import { ISelectProps } from './types'

import { Select } from '../Select'

import { twMerge } from 'tailwind-merge'

interface ISelectLabelProps extends ISelectProps {
  title?: string
  titleTw?: string
  selectTw?: string
}

export const SelectLabel = ({
  title,
  titleTw,
  selectTw,
  className,
  ...props
}: ISelectLabelProps) => (
  <label className={twMerge('flex flex-col gap-2', className)}>
    <span className={twMerge('font-semibold text-gray-700 block', titleTw)}>
      {title}
    </span>

    <Select className={selectTw} {...props} />
  </label>
)
