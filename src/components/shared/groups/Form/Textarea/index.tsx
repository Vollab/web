import { LeftIcon } from '../Field/LeftIcon'

import { forwardRef } from 'react'

import { TTextareaProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

export interface ITextareaProps extends TTextareaProps {
  value?: string
  error?: { message: string }
}

export const Textarea = forwardRef<any, ITextareaProps>(
  ({ className, error, value, ...props }, ref) => (
    <div
      className={twMerge('border w-full rounded-lg h-32 relative', className)}
    >
      <div className='absolute -left-8 top-2'>
        {error && <LeftIcon error={error} />}
      </div>

      <textarea
        ref={ref}
        value={value}
        {...props}
        className='resize-none outline-none h-full w-full px-4 py-3 bg-transparent'
      />
    </div>
  )
)

Textarea.displayName = 'Textarea'
