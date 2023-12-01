import { IUseUsersQuery } from './types'

import { useQuery } from 'src/hooks/useQuery'

import { getUsers } from 'src/requests/users'
import { UserParams } from 'types-vollab/dist/routes/users/[id]'

export const useUsers = ({ id }: UserParams) =>
  useQuery<IUseUsersQuery>(['users', id], () => getUsers({ id }))
