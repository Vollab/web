import { IResizableProps } from './types'

import { useRef } from 'react'

import { TInputProps } from 'src/types/react.types'

export const ResizableInput = ({
  className,
  minWidth = 0,
  onInput: onInputProp,
  onKeyDown: onKeyDownProp,
  ...props
}: IResizableProps) => {
  console.log(className)

  const inputRef = useRef<HTMLInputElement>(null)

  const onKeyDown: TInputProps['onKeyDown'] = e => {
    if (e.key === 'Backspace') updatesWidth()

    if (e.key === 'x' && e.ctrlKey) {
      updatesWidth()
    }

    onKeyDownProp && onKeyDownProp(e)
  }

  const onInput: TInputProps['onChange'] = e => {
    updatesWidth()

    onInputProp && onInputProp(e)
  }

  const updatesWidth = () => {
    const input = inputRef.current

    if (input) {
      input.style.width = minWidth + 'px'
      input.style.width = input.scrollWidth + 6 + 'px'
    }
  }

  return (
    <input
      type='text'
      ref={inputRef}
      onInput={onInput}
      onKeyDown={onKeyDown}
      className={'w-0 outline-none p-0 m-0 ' + className}
      {...props}
    />
  )
}
