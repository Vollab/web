import { sendCookies } from 'src/services/api/cookies/send'

export const GET = async () =>
  sendCookies({ route: `/demands`, service: 'demand' })
