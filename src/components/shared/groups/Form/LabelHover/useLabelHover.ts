import { IUseLabelHoverParams } from './types'

import { useEffect, useRef, useState } from 'react'

import { TInputProps } from 'src/types/react.types'

export const useLabelHover = ({
  trigger,
  onConfirmClick: onConfirmClickProp
}: IUseLabelHoverParams) => {
  const labelRef = useRef<HTMLLabelElement>(null)
  const [inputWidth, setInputWidth] = useState(0)
  const [showInput, setShowInput] = useState(false)

  const onLabelClick = () => {
    setShowInput(true)
  }

  const onKeyDown: TInputProps['onKeyDown'] = e => {
    if (e.key === 'Escape') setShowInput(false)
    if (e.key === 'Enter') {
      setShowInput(false)
      onConfirmClickProp && onConfirmClickProp()
    }
  }

  const onConfirmClick = () => {
    setShowInput(false)
    onConfirmClickProp && onConfirmClickProp()
  }

  useEffect(() => {
    if (labelRef.current && trigger) {
      const childRef = labelRef.current.firstChild as HTMLElement

      if (childRef) setInputWidth(childRef.clientWidth)
    }
  }, [trigger])

  return {
    labelRef,
    showInput,
    onKeyDown,
    inputWidth,
    onLabelClick,
    onConfirmClick
  }
}
