import { sendCookies } from 'src/api/core/cookies/send'

export const PUT = async (request: Request) =>
  sendCookies({ request, method: 'PUT', route: '/current-user/avatar' })
