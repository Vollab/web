import { sendCookies } from 'src/api/core/cookies/send'

export const GET = async (
  _request: Request,
  context: { params: { id: string } }
) =>
  sendCookies({
    method: 'GET',
    service: 'demand',
    route: `/demands/${context.params.id}`
  })

export const PATCH = async (
  request: Request,
  context: { params: { id: string } }
) =>
  sendCookies({
    request,
    method: 'PATCH',
    service: 'demand',
    route: `/demands/${context.params.id}`
  })

export async function DELETE(
  _request: Request,
  context: { params: { id: string } }
) {
  return sendCookies({
    method: 'DELETE',
    service: 'demand',
    route: `/demands/${context.params.id}`
  })
}
