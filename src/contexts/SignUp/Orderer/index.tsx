import { createContext, useContext, useState } from 'react'

import { ILinksFormProps } from 'src/components/shared/molecules/LinksForm'

import { IChildrenProps, TSetState } from 'src/types/react.types'

import { OrdererSignUpRequest } from 'types-vollab/dist/routes/orderers/sign-up'

interface IOrdererData extends OrdererSignUpRequest {
  links?: ILinksFormProps['links']
  avatar?: { url: string; formData: FormData }
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
