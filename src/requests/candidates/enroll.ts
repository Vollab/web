import {
  Params,
  Response
} from 'types-vollab/dist/v2/vacancy/api/demands/[demand_id]/vacancies/[vacancy_id]/enroll/POST'

export type TEnroll = (params: Params) => Promise<Response>

export const enroll: TEnroll = async () => {
  const enrollResponse: Response = { enrollment: { status: 'PENDING' } }

  console.log('enroll', enrollResponse)

  return enrollResponse
}
