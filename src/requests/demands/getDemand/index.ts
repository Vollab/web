import { TGetDemand } from './types'

import { demand } from 'src/static/temp/demand'

import { api } from 'src/services/api'

export const getDemand: TGetDemand = ({ id }) => {
  return demand
  return api.get({ url: `/demands/${id}` })
}
