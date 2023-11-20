import { TGetActivityAreas } from './types'

import { api } from 'src/services/api'

export const getActivityAreas: TGetActivityAreas = () => {
  return api.get({ url: '/activity-areas' })
}
