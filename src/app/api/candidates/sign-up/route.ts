import { getSetCookies } from 'src/utils/next/cookies/getSet'

export const POST = async (request: Request) =>
  getSetCookies({
    data: request,
    method: 'POST',
    route: '/candidates/sign-up'
  })
