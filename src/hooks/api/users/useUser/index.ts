import { IUseUserQuery } from './types'

import { UserParams, UserResponse } from 'common/types/routes/users/id'

import { useQuery } from 'src/hooks/useQuery'

import { api } from 'src/services/api'

export const useUser = ({ id }: UserParams) =>
  useQuery<IUseUserQuery>(
    ['users', id],
    () => api.get({ url: `/demands/${id}` }),
    {
      select: ({ location, ...user }: UserResponse) => ({
        ...user,
        location: `${location?.city}, ${location?.state}`
      })
    }
  )
