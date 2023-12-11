import { getCurrentUserVacancies } from './getCurrentUserVacancies'

import { useQuery } from 'src/hooks/ReactQuery/useQuery'

import { Response } from 'types-vollab/dist/src/modules/vacancy/api/current-user/vacancies/GET'

export interface IUseCurrentUserVacanciesQuery {
  response: Response
}

export const useCurrentUserVacancies = (enabled = true) =>
  useQuery<IUseCurrentUserVacanciesQuery>(
    'current-vacancies',
    getCurrentUserVacancies,
    { enabled, refetchOnMount: true, refetchOnWindowFocus: true }
  )
