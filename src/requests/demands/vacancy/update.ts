import {
  Params,
  Request,
  Response
} from 'types-vollab/dist/src/modules/vacancy/api/demands/[demand_id]/vacancies/[vacancy_id]/PATCH'

export type TUpdateVacancy = (request: Request & Params) => Promise<Response>

export const updateVacancy: TUpdateVacancy = async () => {
  return { vacancy: {} } as unknown as Promise<any>
}
