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
    'font-semibold text-xl text-tertiary-500 font-primary break-all'

  useEffect(() => {
    setTitle(demand?.title)
  }, [demand])

  return (
    <div className='col-span-3 flex items-center'>
      {isOwner ? (
        <LabelHover
          value={title}
          maxLength={30}
          custom={{
            tws: { input: titleTw + ' max-w-[145px]', label: titleTw }
          }}
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
      )}
    </div>
  )
}
