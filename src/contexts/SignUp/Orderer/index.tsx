import { createContext, useContext, useState } from 'react'

import { IChildrenProps, TSetState } from 'src/types/react.types'

import { Request } from 'types-vollab/dist/v2/auth/api/orderers/sign-up/(all)/POST'

interface IOrdererContext {
  ordererData: Request
  setOrdererData: TSetState<Request>
}

const initial: IOrdererContext['ordererData'] = {
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
  const [ordererData, setOrdererData] = useState<Request>(initial)

  return (
    <OrdererContext.Provider value={{ ordererData, setOrdererData }}>
      {children}
    </OrdererContext.Provider>
  )
}

export const useOrdererContext = () => useContext(OrdererContext)
