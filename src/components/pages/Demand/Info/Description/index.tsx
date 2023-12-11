'use client'

import { InfoItem } from '../InfoItem'

import { useEffect, useState } from 'react'

import { useUpdateDemand } from 'src/api/requests/demands/update/useUpdateDemand'

import { TextareaHover } from 'src/components/shared/groups/Form/TextareaHover'

import { useDemandContext } from 'src/contexts/Demand'

export const Description = () => {
  const { mutate } = useUpdateDemand()
  const { isOwner, demand } = useDemandContext()
  const [description, setDescription] = useState<string>()

  const descriptionTw = 'text-gray-500 w-full min-h-[20px] break-words'

  useEffect(() => {
    setDescription(demand?.description)
  }, [demand?.description])

  return (
    <InfoItem title='Descrição'>
      {isOwner ? (
        <TextareaHover
          maxLength={255}
          value={description}
          custom={{
            tws: {
              label: descriptionTw,
              input: descriptionTw + ' p-2',
              pencil: 'absolute right-0 top-0'
            }
          }}
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
