import { interceptor } from 'src/api/core/interceptor'

export interface IApproveParams {
  demand_id: string
  vacancy_id: string
  candidate_id: string
}

export const approve = ({
  candidate_id,
  demand_id,
  vacancy_id
}: IApproveParams) =>
  interceptor({
    method: 'PATCH',
    service: 'vacancy',
    route: `/demands/${demand_id}/vacancies/${vacancy_id}/candidates/${candidate_id}/approve`
  })
