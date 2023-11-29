import { TGetUsers } from './types'

export const getUsers: TGetUsers = async () => {
  const response = await fetch('/api/users')

  return await response.json()
}
