import { sendCookies } from 'src/api/core/cookies/send'

export const GET = async (
  _request: Request,
  context: { params: { id: string } }
) =>
  sendCookies({
    method: 'GET',
    service: 'vacancy',
    route: `/demands/${context.params.id}/vacancies`
  })

export const POST = async (
  request: Request,
  context: { params: { id: string } }
) =>
  sendCookies({
    request,
    method: 'POST',
    service: 'vacancy',
    route: `/demands/${context.params.id}/vacancies`
  })
