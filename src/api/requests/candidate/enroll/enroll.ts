import { interceptor } from 'src/api/core/interceptor'

import {
  Params,
  Response
} from 'types-vollab/dist/src/modules/vacancy/api/demands/[demand_id]/vacancies/[vacancy_id]/enroll/POST'

type TEnroll = (params: Params) => Promise<Response>

export const enroll: TEnroll = ({ demand_id, vacancy_id }) =>
  interceptor({
    method: 'POST',
    route: `/demands/${demand_id}/vacancies/${vacancy_id}/enroll`
  })
