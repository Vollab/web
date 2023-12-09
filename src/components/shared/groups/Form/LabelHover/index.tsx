import { ILabelHoverProps } from './types'

import { Confirm } from './Confirm'
import { InputHover } from './InputHover'
import { Pencil } from './Pencil'
import { useLabelHover } from './useLabelHover'

import { twMerge } from 'tailwind-merge'

export const LabelHover = ({
  custom,
  children,
  className,
  enabled = true,
  onConfirmClick: onConfirmClickProp,
  ...props
}: ILabelHoverProps) => {
  const {
    labelRef,
    showInput,
    onKeyDown,
    inputWidth,
    onLabelClick,
    onConfirmClick
  } = useLabelHover({ trigger: children, onConfirmClick: onConfirmClickProp })

  return enabled ? (
    <div
      className={twMerge('flex gap-1 h-full items-center flex-col', className)}
    >
      <label
        ref={labelRef}
        onClick={onLabelClick}
        className={twMerge(
          'group cursor-pointer flex gap-1 items-center h-full flex-1 border',
          custom?.tws?.label
        )}
      >
        <InputHover
          showInput={showInput}
          onKeyDown={onKeyDown}
          inputWidth={inputWidth}
          className={custom?.tws?.input}
          {...props}
        >
          {children}
        </InputHover>

        <Pencil showInput={showInput} />
      </label>

      <Confirm onConfirmClick={onConfirmClick} showInput={showInput} />
    </div>
  ) : (
    children
  )
}
