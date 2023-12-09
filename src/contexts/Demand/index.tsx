'use client'

import { createContext, useContext, useEffect, useState } from 'react'

import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'
import { ICurrentUserDemandVacanciesResponse } from 'src/api/requests/currentUser/getDemandVacancies/getDemandVacancies'
import { useCurrentUserDemandVacancies } from 'src/api/requests/currentUser/getDemandVacancies/useDemandVacancies'

import { IChildrenProps } from 'src/types/react.types'

interface IDemandProviderProps extends IChildrenProps {
  id: string
}

interface IDemandContext {
  isOwner?: boolean
  demand?: ICurrentUserDemandVacanciesResponse['demand']
  vacancies?: ICurrentUserDemandVacanciesResponse['vacancies']
}

const DemandContext = createContext<IDemandContext>({})

export const DemandProvider = ({ children, id }: IDemandProviderProps) => {
  const { data: userData } = useCurrentUser()
  const [isOwner, setIsOwner] = useState(false)
  const { data: demandVacanciesData } = useCurrentUserDemandVacancies({ id })

  const userId = userData?.user.id
  const ownerId = demandVacanciesData?.demand?.orderer.id

  useEffect(() => {
    setIsOwner(userId === ownerId)
  }, [ownerId, userId])

  return (
    <DemandContext.Provider value={{ isOwner, ...demandVacanciesData }}>
      {children}
    </DemandContext.Provider>
  )
}

export const useDemandContext = () => useContext(DemandContext)
