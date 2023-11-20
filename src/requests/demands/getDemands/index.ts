import { TGetDemands } from './types'

import { demands } from 'src/static/temp/demands'

import { api } from 'src/services/api'

export const getDemands: TGetDemands = () => {
  return demands
  return api.get({ url: `/demands` })
}
