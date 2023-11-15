import { TGetUser, TSelectUser } from './types'

import { api } from 'src/services/api'

export const getUser: TGetUser = ({ id }) => api.get({ url: `/demands/${id}` })

export const selectUser: TSelectUser = ({ location, ...user }) => ({
  ...user,
  location: `${location?.city}, ${location?.state}`
})
