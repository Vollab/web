import { sendCookies } from 'src/api/core/cookies/send'

export const GET = async (request: Request, context: any) =>
  sendCookies({ route: `/candidates/${context.params.id}` })
