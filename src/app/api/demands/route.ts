import { sendCookies } from 'src/api/core/cookies/send'

export const GET = async () =>
  sendCookies({ route: `/demands`, service: 'demand' })

export const POST = async (request: Request) =>
  sendCookies({ request, method: 'POST', route: '/demands', service: 'demand' })
