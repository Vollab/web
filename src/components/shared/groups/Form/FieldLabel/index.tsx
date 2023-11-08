import { Field } from '../Field'
import { IFieldProps } from '../Field/types'

import { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

interface IFieldLabelProps extends IFieldProps {
  title: string
  fieldTw?: string
  titleTw?: string
  secondTitle?: ReactNode
  className?: string
}

export const FieldLabel = ({
  title,
  fieldTw,
  titleTw,
  secondTitle,
  className,
  ...props
}: IFieldLabelProps) => (
  <div className={className}>
    <div className='flex items-center justify-between'>
      <span className={twMerge('font-semibold text-gray-700', titleTw)}>
        {title}
      </span>

      {secondTitle || <></>}
    </div>

    <Field className={twMerge('max-h-[56px] mt-2', fieldTw)} {...props} />
  </div>
)
