import { interceptor } from 'src/api/core/interceptor'

import {
  Params,
  Request,
  Response
} from 'types-vollab/dist/src/modules/demands/api/demands/[id]/PATCH'

type TUpdateDemand = (request: Request & Params) => Promise<Response>

export const updateDemand: TUpdateDemand = ({ id, ...request }) =>
  interceptor({
    method: 'PATCH',
    request: request,
    service: 'demand',
    route: `/demands/${id}`
  })
