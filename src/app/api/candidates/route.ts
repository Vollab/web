import { sendCookies } from 'src/api/core/cookies/send'

export const GET = (request: Request, context: any) =>
  sendCookies({ route: `/candidates/${context.params.id}` })

export const PATCH = (request: Request) =>
  sendCookies({
    request,
    method: 'PATCH',
    route: `/candidates`
  })
