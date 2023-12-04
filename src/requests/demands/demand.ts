import type {
  Params,
  Response
} from 'types-vollab/dist/modules/demands/api/demands/[id]/GET'

export type TGetDemand = (params: Params) => Promise<Response>

export const getDemand: TGetDemand = () => {
  return { demand: {} } as unknown as Promise<any>
}
