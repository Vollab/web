import { sendCookies } from 'src/api/core/cookies/send'

export interface IContext {
  params: { id: string; vacancy_id: string }
}

export const PATCH = async (
  _request: Request,
  { params: { id, vacancy_id } }: IContext
) =>
  sendCookies({
    method: 'PATCH',
    service: 'vacancy',
    route: `/demands/${id}/vacancies/${vacancy_id}/disenroll`
  })
