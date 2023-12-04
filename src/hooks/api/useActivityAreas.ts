import { useQuery } from 'src/hooks/useQuery'

import { getActivityAreas } from 'src/requests/activity-areas'

import type { Response } from 'types-vollab/dist/modules/auth/api/activity-areas/GET'

interface IUseActivityAreaQuery {
  response: Response
}

export const useActivityAreas = () =>
  useQuery<IUseActivityAreaQuery>('activity-areas', getActivityAreas)
