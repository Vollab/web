import { sendCookies } from 'src/services/api/cookies/send'

export const GET = async (
  _request: Request,
  context: { params: { id: string } }
) =>
  sendCookies({
    method: 'GET',
    service: 'demand',
    route: `/demands/${context.params.id}`
  })
