import { interceptor } from 'src/api/core/interceptor'

export interface IGetApplicantsParams {
  demand_id: string
  vacancy_id: string
}

export const getApplicants = ({
  demand_id,
  vacancy_id
}: IGetApplicantsParams) =>
  interceptor({
    service: 'vacancy',
    route: `/demands/${demand_id}/vacancies/${vacancy_id}/candidates`
  })
