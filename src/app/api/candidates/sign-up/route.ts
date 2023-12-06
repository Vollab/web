import { getSetCookies } from 'src/services/api/cookies/getSet'

export const POST = async (request: Request) =>
  getSetCookies({
    request,
    method: 'POST',
    route: '/candidates/sign-up'
  })
