import { createContext, useContext, useState } from 'react'

import { IChildrenProps, TSetState } from 'src/types/react.types'

import { OrdererSignUpRequest } from 'types-vollab/dist/routes/orderers/sign-up'
import { Link } from 'types-vollab/dist/shared/link'

interface IOrdererData extends OrdererSignUpRequest {
  links?: Link[]
  avatar?: string
}

interface IOrdererContext {
  ordererData: IOrdererData
  setOrdererData: TSetState<IOrdererData>
}

const initial: IOrdererData = {
  name: '',
  email: '',
  phone: '',
  password: '',
  biography: ''
}

const OrdererContext = createContext<IOrdererContext>({
  ordererData: initial,
  setOrdererData: () => {}
})

export const OrdererProvider = ({ children }: IChildrenProps) => {
  const [ordererData, setOrdererData] = useState<IOrdererData>(initial)

  return (
    <OrdererContext.Provider value={{ ordererData, setOrdererData }}>
      {children}
    </OrdererContext.Provider>
  )
}

export const useOrdererContext = () => useContext(OrdererContext)
