import { sendCookies } from 'src/services/api/cookies/send'

export const GET = async (request: Request) =>
  sendCookies({
    request,
    service: 'vacancy',
    route: '/current-user/vacancies'
  })
