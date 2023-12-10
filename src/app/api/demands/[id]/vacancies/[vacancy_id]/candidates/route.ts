import { sendCookies } from 'src/api/core/cookies/send'

export const GET = async (
  _request: Request,
  context: { params: { id: string; vacancy_id: string } }
) =>
  sendCookies({
    service: 'vacancy',
    route: `/demands/${context.params.id}/vacancies/${context.params.vacancy_id}/candidates`
  })
