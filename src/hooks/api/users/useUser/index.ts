import { IUseUserQuery } from './types'

import { UserParams } from 'common/types/routes/users/id'

import { useQuery } from 'src/hooks/useQuery'

import { getUser, selectUser } from 'src/requests/users/getUser'

export const useUser = ({ id }: UserParams) =>
  useQuery<IUseUserQuery>(['users', id], () => getUser({ id }), {
    select: selectUser
  })
