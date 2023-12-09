import { interceptor } from 'src/api/core/interceptor'

import {
  Params,
  Response
} from 'types-vollab/dist/src/modules/demands/api/demands/[id]/GET'

export type TGetDemand = (params: Params) => Promise<Response>

export const getDemand: TGetDemand = ({ id }) =>
  interceptor({
    method: 'GET',
    service: 'demand',
    route: `/demands/${id}`
  })
