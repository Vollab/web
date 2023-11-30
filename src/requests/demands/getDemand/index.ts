import { TGetDemand } from './types'

import { api } from 'src/services/api'

export const getDemand: TGetDemand = ({ id }) =>
  api.get({ url: `/demands/${id}` })
