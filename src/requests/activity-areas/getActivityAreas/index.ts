import { TGetActivityAreas } from './types'

import { api } from 'src/services/api'

export const getActivityAreas: TGetActivityAreas = () => {
  console.log('activity_areas')

  return api.get({ url: '/activity-areas' })
}
