import { TGetActivityAreas } from './types'

import { api } from 'src/services/api'

export const getActivityAreas: TGetActivityAreas = () =>
  api.get({ url: '/activity-areas' })
