import { ResizableInput } from '../../ResizableInput'

import { TInputProps } from 'src/types/react.types'

interface IInputHoverProps extends TInputProps {
  showInput: boolean
  inputWidth: number
  onKeyDown: TInputProps['onKeyDown']
}

export const InputHover = ({
  children,
  showInput,
  onKeyDown,
  className,
  inputWidth,
  ...props
}: IInputHoverProps) =>
  showInput ? (
    <ResizableInput
      onKeyDown={onKeyDown}
      className={className}
      style={{ width: inputWidth }}
      {...props}
    />
  ) : (
    <>{children}</>
  )
