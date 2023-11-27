import { TGetDemands } from './types'

import { api } from 'src/services/api'

export const getDemands: TGetDemands = () =>
  api.get({ url: `/demands`, service: 'demand' })
