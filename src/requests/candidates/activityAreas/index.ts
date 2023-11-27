import { TActivityAreas } from './types'

import { api } from 'src/services/api'

export const activityAreas: TActivityAreas = async activityAreas => {
  if (activityAreas.length > 0)
    for (let i = 0; i < activityAreas.length; i++)
      api.post({
        url: `/candidates/activity-area/${activityAreas[i]}`
      })
}
