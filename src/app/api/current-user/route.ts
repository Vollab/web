import { sendCookies } from 'src/api/core/cookies/send'

export const GET = async (request: Request) =>
  sendCookies({
    request,
    route: '/current-user'
  })
