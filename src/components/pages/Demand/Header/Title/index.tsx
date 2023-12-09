'use client'

import { useEffect, useState } from 'react'

import { useUpdateDemand } from 'src/api/requests/demands/update/useUpdateDemand'

import { LabelHover } from 'src/components/shared/groups/Form/LabelHover'

import { useDemandContext } from 'src/contexts/Demand'

export const Title = () => {
  const { mutate } = useUpdateDemand()
  const [title, setTitle] = useState<string>()
  const { demand, isOwner } = useDemandContext()

  const titleTw =
    'h-[26px] font-semibold text-h5 text-tertiary-500 font-primary border-none'

  useEffect(() => {
    setTitle(demand?.title)
  }, [demand])

  return isOwner ? (
    <LabelHover
      value={title}
      maxLength={13}
      custom={{ tws: { input: titleTw, label: titleTw } }}
      onChange={e => {
        setTitle(e.target.value)
      }}
      onConfirmClick={() => {
        demand?.id && mutate({ title, id: demand.id })
      }}
    >
      <h1 className={titleTw}>{title}</h1>
    </LabelHover>
  ) : (
    <h1 className={titleTw}>{title}</h1>
  )
}
