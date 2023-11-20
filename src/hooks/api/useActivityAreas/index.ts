import { IUseActivityAreaQuery } from './types'

import { useQuery } from 'src/hooks/useQuery'

import { getActivityAreas } from 'src/requests/activity-areas/getActivityAreas'

export const useActivityAreas = () =>
  useQuery<IUseActivityAreaQuery>('activity-areas', getActivityAreas)
