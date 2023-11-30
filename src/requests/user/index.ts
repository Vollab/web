import { TGetUser } from './types'

export const getUser: TGetUser = async () => {
  const response = await fetch('/api/current-user')
  const avatar = await fetch('/api/current-user/avatar')

  return {
    ...(await response.json()).user,
    avatar: URL.createObjectURL(await avatar.blob())
  }
}
