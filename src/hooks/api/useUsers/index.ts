import { IUseUsersQuery } from './types'

import { useQuery } from 'src/hooks/useQuery'

import { findUser } from 'src/requests/findUser'
import { UserParams } from 'types-vollab/dist/routes/users/[id]'

export const useFindUser = ({ id }: UserParams) =>
  useQuery<IUseUsersQuery>(['users', id], () => findUser({ id }))
