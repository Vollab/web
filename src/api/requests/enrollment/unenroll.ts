import { interceptor } from 'src/api/core/interceptor'

export interface IUnenrollParams {
  demand_id: string
  vacancy_id: string
}

export const unenroll = ({ demand_id, vacancy_id }: IUnenrollParams) =>
  interceptor({
    method: 'PATCH',
    service: 'vacancy',
    route: `/demands/${demand_id}/vacancies/${vacancy_id}/disenroll`
  })
