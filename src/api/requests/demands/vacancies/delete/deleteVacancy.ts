import { interceptor } from 'src/api/core/interceptor'

export interface IDeleteVacancyParams {
  demand_id: string
  vacancy_id: string
}

export const deleteVacancy = ({
  demand_id,
  vacancy_id
}: IDeleteVacancyParams) =>
  interceptor({
    method: 'DELETE',
    service: 'vacancy',
    route: `/demands/${demand_id}/vacancies/${vacancy_id}`
  })
