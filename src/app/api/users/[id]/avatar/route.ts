import { sendCookies } from 'src/api/core/cookies/send'

export const GET = async (
  _request: Request,
  context: { params: { id: string } }
) => sendCookies({ route: `/users/${context.params.id}/avatar` })
