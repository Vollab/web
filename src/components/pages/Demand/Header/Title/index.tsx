'use client'

import { useState } from 'react'

import { LabelHover } from 'src/components/shared/groups/Form/LabelHover'

import { useDemandContext } from 'src/contexts/Demand'

import { TInputProps } from 'src/types/react.types'

export const Title = () => {
  const { demand, isOwner } = useDemandContext()
  const [title, setTitle] = useState(demand?.title)

  const titleTw =
    'h-[26px] font-semibold text-h5 text-tertiary-500 font-primary border-none'

  const onTitleChange: TInputProps['onChange'] = e => {
    setTitle(e.target.value)
  }

  const onTitleConfirmClick = () => {}

  return isOwner ? (
    <LabelHover
      value={title}
      maxLength={13}
      onChange={onTitleChange}
      onConfirmClick={onTitleConfirmClick}
      custom={{ tws: { input: titleTw, label: titleTw } }}
    >
      <h1 className={titleTw}>{title}</h1>
    </LabelHover>
  ) : (
    <h1 className={titleTw}>{title}</h1>
  )
}
