import { TGetUsers } from './types'

export const getUsers: TGetUsers = async ({ id }) => {
  const response = await fetch(`/api/users/${id}`)
  const avatar = await fetch(`/api/users/${id}/avatar`)

  return {
    ...(await response.json()).user,
    avatar: (await avatar.json()).avatar
  }
}
