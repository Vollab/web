import { sendCookies } from 'src/api/core/cookies/send'

export const GET = async (request: Request) =>
  sendCookies({
    request,
    service: 'vacancy',
    route: '/current-user/vacancies'
  })
