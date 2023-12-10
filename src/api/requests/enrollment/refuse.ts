import { interceptor } from 'src/api/core/interceptor'

export interface IRefuseParams {
  demand_id: string
  vacancy_id: string
  candidate_id: string
}

export const refuse = ({
  candidate_id,
  demand_id,
  vacancy_id
}: IRefuseParams) =>
  interceptor({
    method: 'PATCH',
    service: 'vacancy',
    route: `/demands/${demand_id}/vacancies/${vacancy_id}/candidates/${candidate_id}/refuse`
  })
