'use client'

import { createContext, useContext, useEffect, useState } from 'react'

import { useUser } from 'src/hooks/api/useUser'

import { IChildrenProps } from 'src/types/react.types'

import { TDemand } from 'src/requests/demands/getDemand/types'

interface IDemandProviderProps extends IChildrenProps, IDemandContext {}

interface IDemandContext {
  demand?: TDemand
  isOwner?: boolean
}

const DemandContext = createContext<IDemandContext>({})

export const DemandProvider = ({ children, demand }: IDemandProviderProps) => {
  const [isOwner, setIsOwner] = useState(false)
  const { data } = useUser()

  useEffect(() => {
    setIsOwner(data?.user.id === demand?.orderer.id)
  }, [data?.user.id, demand?.orderer.id])

  return (
    <DemandContext.Provider value={{ demand, isOwner }}>
      {children}
    </DemandContext.Provider>
  )
}

export const useDemandContext = () => useContext(DemandContext)
