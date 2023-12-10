import { interceptor } from 'src/api/core/interceptor'

export interface IAcceptParams {
  demand_id: string
  vacancy_id: string
}

export const accept = ({ demand_id, vacancy_id }: IAcceptParams) =>
  interceptor({
    method: 'PATCH',
    service: 'vacancy',
    route: `/demands/${demand_id}/vacancies/${vacancy_id}/accept`
  })
