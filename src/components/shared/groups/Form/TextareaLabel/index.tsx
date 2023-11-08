import { ITextareaProps, Textarea } from '../Textarea'

import { twMerge } from 'tailwind-merge'

interface ITextareaLabelProps extends ITextareaProps {
  titleTw?: string
  textareaTw?: string
}

export const TextareaLabel = ({
  title,
  titleTw,
  className,
  textareaTw,
  ...props
}: ITextareaLabelProps) => (
  <label className={twMerge('flex flex-col gap-2', className)}>
    <span className={twMerge('font-semibold text-gray-700', titleTw)}>
      {title}
    </span>

    <Textarea className={textareaTw} {...props} />
  </label>
)
