'use client'

import { InfoItem } from '../InfoItem'

import { useEffect, useState } from 'react'

import { TextareaHover } from 'src/components/shared/groups/Form/TexareaHover'

import { useDemandContext } from 'src/contexts/Demand'

import { useUpdateDemand } from 'src/hooks/api/demands/useUpdateDemand'

export const Resume = () => {
  const { mutate } = useUpdateDemand()
  const { isOwner, demand } = useDemandContext()

  const [resume, setResume] = useState(demand?.resume)

  const resumeTw = 'text-gray-600 w-full min-h-[20px]'

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
