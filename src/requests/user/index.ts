import { TGetUser } from './types'

export const getUser: TGetUser = async () => {
  const response = await fetch('/api/current-user')

  return await response.json()
}
