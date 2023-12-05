import { useQuery } from 'src/hooks/useQuery'

import { getVacancies } from 'src/requests/current-user/vacancies'

import type { Response } from 'types-vollab/dist/src/modules/vacancy/api/current-user/vacancies/GET'

interface IUseVacanciesQuery {
  response: Response
}

export const useVacancies = () =>
  useQuery<IUseVacanciesQuery>('current-user', getVacancies)
