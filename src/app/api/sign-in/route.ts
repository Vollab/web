import { getSetCookies } from 'src/utils/next/cookies/getSet'

export const POST = async (request: Request) =>
  getSetCookies({ request, method: 'POST', route: '/sign-in' })
