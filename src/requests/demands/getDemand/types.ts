import {
  Params,
  Response
} from 'types-vollab/dist/v2/auth/api/demands/[id]/GET'

export type TGetDemand = (params: {
  id: Params['id']
  candidateId?: string
}) => Promise<Response>
