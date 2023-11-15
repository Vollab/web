import { TGetDemands } from './types'

import { api } from 'src/services/api'

export const getDemands: TGetDemands = ({ page }) =>
  api.get({ url: `/demands?page=${page}` })
