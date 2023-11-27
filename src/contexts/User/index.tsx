import { createContext, useContext, useState } from 'react'

import { IChildrenProps, TSetState } from 'src/types/react.types'

import { User } from 'types-vollab/dist/shared/user'

interface IUserContext {
  user?: User
  setUser: TSetState<IUserContext['user']>
}

const UserContext = createContext<IUserContext>({ setUser: () => {} })

export const UserProvider = ({ children }: IChildrenProps) => {
  const [user, setUser] = useState<User>()

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
