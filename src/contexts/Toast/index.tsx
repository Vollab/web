import { RefObject, createContext, useContext, useRef } from 'react'

import { IForwardToast, Toast } from 'src/components/shared/molecules/Toast'

import { IChildrenProps } from 'src/types/react.types'

interface IToastContext {
  toastRef?: RefObject<IForwardToast>
}

const ToastContext = createContext<IToastContext>({})

export const ToastProvider = ({ children }: IChildrenProps) => {
  const toastRef = useRef<IForwardToast>(null)

  return (
    <ToastContext.Provider value={{ toastRef }}>
      <Toast ref={toastRef} />

      {children}
    </ToastContext.Provider>
  )
}

export const useToastContext = () => useContext(ToastContext)
