import {
  DemandParams,
  DemandResponse
} from 'types-vollab/dist/routes/demands/[id]'

export type TGetDemand = (
  params: DemandParams
) => Promise<DemandResponse> | DemandResponse
