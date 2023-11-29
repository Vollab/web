import { TGetDemands } from './types'

export const getDemands: TGetDemands = async () => {
  const response = await fetch('/api/demands')

  return await response.json()
}
