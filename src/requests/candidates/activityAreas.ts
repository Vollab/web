import { api } from 'src/services/api'

import { ActivityArea } from 'types-vollab/dist/shared/activity-area'

export type TActivityAreas = (data: ActivityArea['id'][]) => Promise<void>

export const activityAreas: TActivityAreas = async activityAreas => {
  if (activityAreas.length > 0)
    for (let i = 0; i < activityAreas.length; i++)
      api.post({
        url: `/candidates/activity-area/${activityAreas[i]}`
      })
}
