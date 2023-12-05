import { demandResponse } from 'src/static/temp/demand'

import type {
  Params,
  Request,
  Response
} from 'types-vollab/dist/src/modules/demands/api/demands/[id]/PATCH'

type TUpdateDemand = (request: Request & Params) => Promise<Response>

export const updateDemand: TUpdateDemand = async ({ id, ...request }) => {
  const res = demandResponse({ id })

  const updatedDemandResponse: Response = {
    demand: { ...res.demand, ...request }
  }

  console.log('update-demand', {
    info: {
      id,
      request: { ...request },
      response: updatedDemandResponse
    }
  })

  return updatedDemandResponse
}
