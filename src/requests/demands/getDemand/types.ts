import {
  Params,
  Response
} from 'types-vollab/dist/v2/demands/api/demands/[id]/GET'

export type TGetDemand = (params: Params) => Promise<Response>
