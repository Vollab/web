import { TGetUser } from './types'

import { userResponse } from 'src/static/temp/user'

export const getUser: TGetUser = async () => {
  return userResponse

  const response = await fetch('/api/current-user')
  const avatar = await fetch('/api/current-user/avatar')

  return {
    ...(await response.json()).user,
    avatar: (await avatar.json()).avatar
  }
}
