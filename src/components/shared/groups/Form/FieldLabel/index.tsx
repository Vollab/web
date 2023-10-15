import { IFieldLabelProps } from './types'

import { Field } from '../Field'

import { forwardRef } from 'react'

export const FieldLabel = forwardRef<any, IFieldLabelProps>(
  ({ title, fieldTw, titleTw, secondTitle, className, ...props }, ref) => (
    <div className={className}>
      <div className='flex items-center justify-between'>
        <span className={`font-semibold text-gray-700 ${titleTw}`}>
          {title}
        </span>

        {secondTitle || <></>}
      </div>

      <Field className={`max-h-[56px] mt-2 ${fieldTw}`} {...props} ref={ref} />
    </div>
  )
)

FieldLabel.displayName = 'FieldLabel'
