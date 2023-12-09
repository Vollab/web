import { getActivityAreas } from './getActivityAreas'

import { useQuery } from 'src/hooks/ReactQuery/useQuery'

import { Response } from 'types-vollab/dist/src/modules/auth/api/activity-areas/GET'

interface IUseActivityAreaQuery {
  response: Response
}

export const useActivityAreas = () =>
  useQuery<IUseActivityAreaQuery>('activity-areas', getActivityAreas)
