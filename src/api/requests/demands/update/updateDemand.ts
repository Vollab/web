import { demandResponse } from 'src/static/temp/demand'

import {
  Params,
  Request,
  Response
} from 'types-vollab/dist/src/modules/demands/api/demands/[id]/PATCH'

type TUpdateDemand = (request: Request & Params) => Promise<Response>

export const updateDemand: TUpdateDemand = async ({ ...request }) => {
  const res = demandResponse

  const updatedDemandResponse: Response = {
    demand: { ...res.demand, ...request }
  }

  return updatedDemandResponse
}
