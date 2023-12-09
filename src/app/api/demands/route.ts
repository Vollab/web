import { sendCookies } from 'src/api/core/cookies/send'

export const GET = async () =>
  sendCookies({ route: `/demands`, service: 'demand' })
