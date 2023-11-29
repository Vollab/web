import { getCookies } from 'src/utils/next/getCookies'

export const POST = async (request: Request) =>
  getCookies({ route: '/sign-in', method: 'POST', data: await request.json() })
