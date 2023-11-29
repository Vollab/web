import { useState } from 'react'

import { LabelHover } from 'src/components/shared/groups/Form/LabelHover'

import { TInputProps } from 'src/types/react.types'

interface ITitleProps {
  title?: string
}

export const Title = ({ title: titleProp }: ITitleProps) => {
  const [title, setTitle] = useState(titleProp)

  const titleTw =
    'h-[26px] font-semibold text-h5 text-tertiary-500 font-primary border-none'

  const onTitleChange: TInputProps['onChange'] = e => {
    setTitle(e.target.value)
  }

  const onTitleConfirmClick = () => {}

  return (
    <LabelHover
      value={title}
      maxLength={13}
      onChange={onTitleChange}
      onConfirmClick={onTitleConfirmClick}
      custom={{ tws: { input: titleTw, label: titleTw } }}
    >
      <h1 className={titleTw}>{title}</h1>
    </LabelHover>
  )
}
