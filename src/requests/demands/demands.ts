import type { Response } from 'types-vollab/dist/modules/demands/api/demands/GET'

type TGetDemands = () => Promise<Response>

export const getDemands: TGetDemands = async () => {
  return { demands: [] }
}
