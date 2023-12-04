import { api } from 'src/services/api'

import type { Response } from 'types-vollab/dist/modules/auth/api/activity-areas/GET'

type TGetActivityAreas = () => Promise<Response>

export const getActivityAreas: TGetActivityAreas = () =>
  api.get({ url: '/activity-areas' })
