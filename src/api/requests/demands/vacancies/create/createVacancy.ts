import { interceptor } from 'src/api/core/interceptor'

import { VacancyWorkMode } from 'types-vollab/dist/src/shared/vacancy'

export interface ICreateVacancyParams {
  demand_id: string

  name: string
  city?: string
  state?: string
  description: string
  activity_area_id: string
  work_mode: VacancyWorkMode
}

export const createVacancy = ({ demand_id, ...data }: ICreateVacancyParams) =>
  interceptor({
    method: 'POST',
    service: 'vacancy',
    route: `/demands/${demand_id}/vacancies`,
    request: { ...data, street: ' ' }
  })
