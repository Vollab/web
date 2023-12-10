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
) => {
  console.log(context.params.id)

  return sendCookies({
    request,
    method: 'PATCH',
    service: 'demand',
    route: `/demands/${context.params.id}`
  })
}

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  return sendCookies({
    request,
    method: 'DELETE',
    service: 'demand',
    route: `/demands/${context.params.id}`
  })
}
