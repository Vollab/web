'use client'

import { InfoItem } from '../InfoItem'

import { useEffect, useState } from 'react'

import { useUpdateDemand } from 'src/api/requests/demands/update/useUpdateDemand'

import { TextareaHover } from 'src/components/shared/groups/Form/TextareaHover'

import { useDemandContext } from 'src/contexts/Demand'

export const Resume = () => {
  const { mutate } = useUpdateDemand()
  const { isOwner, demand } = useDemandContext()
  const [resume, setResume] = useState<string>()

  const resumeTw = 'text-gray-600 w-full min-h-[20px] break-words'

  useEffect(() => {
    setResume(demand?.resume)
  }, [demand?.resume])

  return (
    <InfoItem title='Resumo'>
      {isOwner ? (
        <TextareaHover
          value={resume}
          custom={{ tws: { input: resumeTw, label: resumeTw } }}
          onConfirmClick={() => {
            demand?.id && mutate({ resume, id: demand.id })
          }}
          onChange={e => {
            setResume(e.currentTarget.value)
          }}
        >
          <p className={resumeTw}>{resume}</p>
        </TextareaHover>
      ) : (
        <p className={resumeTw}>{resume}</p>
      )}
    </InfoItem>
  )
}
