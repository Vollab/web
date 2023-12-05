import { sendCookies } from 'src/utils/next/cookies/send'

export const GET = async () =>
  sendCookies({ route: `/demands`, service: 'demand' })
