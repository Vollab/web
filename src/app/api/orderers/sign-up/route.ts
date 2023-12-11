import { getSetCookies } from 'src/api/core/cookies/getSet'

export const POST = async (request: Request) =>
  getSetCookies({
    request,
    method: 'POST',
    route: '/orderers/sign-up'
  })
