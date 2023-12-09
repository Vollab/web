import { api } from 'src/api/core'

import { Response } from 'types-vollab/dist/src/modules/auth/api/activity-areas/GET'

type TGetActivityAreas = () => Promise<Response>

export const getActivityAreas: TGetActivityAreas = () =>
  api.get({ url: '/activity-areas' })
