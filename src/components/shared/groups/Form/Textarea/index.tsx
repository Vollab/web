import { TTextareaProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

interface ITextareaProps extends TTextareaProps {}

export const Textarea = ({ className, ...props }: ITextareaProps) => (
  <textarea
    className={twMerge(
      'resize-none outline-none border w-full rounded-lg p-2 h-32',
      className
    )}
    {...props}
  />
)
