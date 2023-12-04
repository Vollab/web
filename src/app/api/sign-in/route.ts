import { getCookies } from 'src/utils/next/cookies/getSet'

export const POST = async (request: Request) =>
  getCookies({ route: '/sign-in', method: 'POST', data: await request.json() })
