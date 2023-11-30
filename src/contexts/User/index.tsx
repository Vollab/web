import { createContext, useContext, useEffect, useState } from 'react'

import { useUser } from 'src/hooks/api/useUser'
import { IUseUserQuery } from 'src/hooks/api/useUser/types'

import { IChildrenProps, TSetState } from 'src/types/react.types'

interface IUserContext {
  refetch: any
  user?: IUseUserQuery['response']
  setUser: TSetState<IUserContext['user']>
}

const UserContext = createContext<IUserContext>({
  setUser: () => {},
  refetch: () => {}
})

export const UserProvider = ({ children }: IChildrenProps) => {
  const { data, refetch } = useUser()
  const [user, setUser] = useState<IUserContext['user']>()

  useEffect(() => {
    setUser(data)
  }, [data])

  return (
    <UserContext.Provider value={{ user, setUser, refetch }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
