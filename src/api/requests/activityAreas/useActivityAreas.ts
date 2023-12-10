import { getActivityAreas } from './getActivityAreas'

import { ISelectOption } from 'src/components/shared/groups/Form/Select/types'

import { useQuery } from 'src/hooks/ReactQuery/useQuery'

import { Response } from 'types-vollab/dist/src/modules/auth/api/activity-areas/GET'

interface IUseActivityAreaQuery {
  response: ISelectOption[]
}

export const useActivityAreas = () =>
  useQuery<IUseActivityAreaQuery>('activity-areas', getActivityAreas, {
    select: (data: Response) =>
      data.activity_areas.map(({ id, name }) => ({ value: id, label: name }))
  })
