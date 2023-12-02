import { TFindUser } from './types'

import { userResponse } from 'src/static/temp/user'

export const findUser: TFindUser = async ({ id }) => {
  console.log(`users-${id}`, userResponse)

  return userResponse

  const response = await fetch(`/api/users/${id}`)
  const avatar = await fetch(`/api/users/${id}/avatar`)

  return {
    ...(await response.json()).user,
    avatar: (await avatar.json()).avatar
  }
}
