import { getDemandVacancies } from './getDemandVacancies'

import { useQuery } from 'src/hooks/ReactQuery/useQuery'

import {
  Params,
  Response
} from 'types-vollab/dist/src/modules/vacancy/api/demands/[demand_id]/vacancies/GET'

interface IUseDemandVacanciesQuery {
  response: Response
}

export const useDemandVacancies = ({ demand_id }: Params) =>
  useQuery<IUseDemandVacanciesQuery>(
    ['demand/vacancies', demand_id],
    () => getDemandVacancies({ demand_id }),
    { enabled: !!demand_id }
  )
