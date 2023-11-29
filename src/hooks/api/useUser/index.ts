import { IUseUserQuery } from './types'

import { useQuery } from 'src/hooks/useQuery'

import { getUser } from 'src/requests/user'

export const useUser = () => useQuery<IUseUserQuery>('user', getUser)
