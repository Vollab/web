import {
  DemandsQueryParams,
  DemandsResponse
} from 'common/types/routes/demands'

export type TGetDemands = (
  params: DemandsQueryParams
) => Promise<DemandsResponse>
