import { interceptor } from 'src/api/core/interceptor'

import { Response } from 'types-vollab/dist/src/modules/vacancy/api/demands/[demand_id]/vacancies/GET'

type TGetDemand = ({ demand_id }: any) => Promise<Response>

export const getDemandVacancies: TGetDemand = ({ demand_id }) =>
  interceptor({
    method: 'GET',
    service: 'vacancy',
    route: `/demands/${demand_id}/vacancies`
  })
