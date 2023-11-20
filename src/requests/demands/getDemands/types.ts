import { DemandsResponse } from 'types-vollab/dist/routes/demands'

export type TGetDemands = () => Promise<DemandsResponse> | DemandsResponse
