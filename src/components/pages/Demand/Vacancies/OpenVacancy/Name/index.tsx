import { useState } from 'react'

import { LabelHover } from 'src/components/shared/groups/Form/LabelHover'

import { useDemandContext } from 'src/contexts/Demand'

import { useUpdateDemand } from 'src/hooks/api/demands/useUpdateDemand'

export const Name = () => {
  const { mutate } = useUpdateDemand()
  const { demand, isOwner } = useDemandContext()
  const [title, setTitle] = useState(demand?.title)

  const titleTw =
    'h-[26px] font-semibold text-h5 text-tertiary-500 font-primary border-none'

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
