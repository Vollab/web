import { sendCookies } from 'src/api/core/cookies/send'

export const POST = async (_request: Request, context: any) =>
  sendCookies({
    method: 'POST',
    service: 'vacancy',
    route: `/demands/${context.params.id}/vacancies/${context.params.vacancy_id}/enroll`
  })
