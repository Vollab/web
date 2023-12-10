import { Confirm } from '../LabelHover/Confirm'
import { Pencil } from '../LabelHover/Pencil'
import { useLabelHover } from '../LabelHover/useLabelHover'
import { Textarea } from '../Textarea'

import { TTextareaProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

interface ITextareaHover extends TTextareaProps {
  value?: string
  onConfirmClick?: () => void
  enabled?: boolean
  custom?: {
    iconFill?: string
    tws?: { pencil?: string; input?: string; label?: string }
  }
}

export const TextareaHover = ({
  value,
  custom,
  children,
  className,
  enabled = true,
  onConfirmClick: onConfirmClickProp,
  ...props
}: ITextareaHover) => {
  const { labelRef, showInput, onLabelClick, onConfirmClick } = useLabelHover({
    trigger: children,
    onConfirmClick: onConfirmClickProp
  })

  return enabled ? (
    <div className={twMerge('flex gap-1 h-full items-center', className)}>
      <label
        ref={labelRef}
        onClick={onLabelClick}
        className={twMerge(
          'group cursor-pointer flex gap-1 items-center h-full',
          custom?.tws?.label
        )}
      >
        {showInput ? (
          <Textarea
            value={value}
            custom={{ inputTw: custom?.tws?.input }}
            {...props}
          />
        ) : (
          children
        )}

        <Pencil showInput={showInput} />
      </label>

      <Confirm onConfirmClick={onConfirmClick} showInput={showInput} />
    </div>
  ) : (
    children
  )
}
