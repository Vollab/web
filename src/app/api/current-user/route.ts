import { sendCookies } from 'src/utils/next/cookies/send'

export const GET = async (request: Request) =>
  sendCookies({
    request,
    route: '/current-user'
  })
