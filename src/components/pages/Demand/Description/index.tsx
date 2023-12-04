'use client'

import { InfoItem } from '../InfoItem'

import { useEffect, useState } from 'react'

import { TextareaHover } from 'src/components/shared/groups/Form/TexareaHover'

import { useDemandContext } from 'src/contexts/Demand'

import { useUpdateDemand } from 'src/hooks/api/demands/useUpdateDemand'

export const Description = () => {
  const { mutate } = useUpdateDemand()
  const { isOwner, demand } = useDemandContext()
  const [description, setDescription] = useState(demand?.description)

  const descriptionTw = 'text-gray-600 w-full min-h-[20px]'

  useEffect(() => {
    setDescription(demand?.description)
  }, [demand?.description])

  return (
    <InfoItem title='Descrição'>
      {isOwner ? (
        <TextareaHover
          value={description}
          custom={{ tws: { input: descriptionTw, label: descriptionTw } }}
          onConfirmClick={() => {
            demand?.id && mutate({ description, id: demand.id })
          }}
          onChange={e => {
            setDescription(e.currentTarget.value)
          }}
        >
          <p className={descriptionTw}>{description}</p>
        </TextareaHover>
      ) : (
        <p className={descriptionTw}>{description}</p>
      )}
    </InfoItem>
  )
}
