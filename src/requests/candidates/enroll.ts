import { interceptor } from 'src/services/api/interceptor'

import type {
  Params,
  Response
} from 'types-vollab/dist/src/modules/vacancy/api/demands/[demand_id]/vacancies/[vacancy_id]/enroll/POST'

type TEnroll = (params: Params) => Promise<Response>

export const enroll: TEnroll = ({ demand_id, vacancy_id }) =>
  interceptor({
    route: `/demands/${demand_id}/vacancies/${vacancy_id}/enroll`,
    method: 'POST'
  })
