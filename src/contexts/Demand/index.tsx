'use client'

import { createContext, useContext, useEffect, useState } from 'react'

import { useCurrentUser } from 'src/hooks/api/currentUser/useCurrentUser'

import { IChildrenProps } from 'src/types/react.types'

import { Response } from 'types-vollab/dist/src/modules/demands/api/demands/[id]/GET'

interface IDemandContext {
  isOwner?: boolean
  demand?: IDemandProviderProps['demand']
}

interface IDemandProviderProps extends IChildrenProps {
  demand?: Response['demand']
}

const DemandContext = createContext<IDemandContext>({})

export const DemandProvider = ({ children, demand }: IDemandProviderProps) => {
  const { data } = useCurrentUser()
  const [isOwner, setIsOwner] = useState(false)

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
