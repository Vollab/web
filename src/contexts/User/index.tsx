import { createContext, useContext, useEffect, useState } from 'react'

import { useUser } from 'src/hooks/api/useUser'

import { IChildrenProps, TSetState } from 'src/types/react.types'

import { User } from 'types-vollab/dist/shared/user'

interface IUserContext {
  user?: User
  refetch: any
  setUser: TSetState<IUserContext['user']>
}

const UserContext = createContext<IUserContext>({
  setUser: () => {},
  refetch: () => {}
})

export const UserProvider = ({ children }: IChildrenProps) => {
  const { data, refetch } = useUser()
  const [user, setUser] = useState<User>()

  useEffect(() => {
    setUser(data?.user)
  }, [data])

  return (
    <UserContext.Provider value={{ user, setUser, refetch }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
