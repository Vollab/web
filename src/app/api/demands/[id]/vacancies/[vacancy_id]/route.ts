import { sendCookies } from 'src/api/core/cookies/send'

export async function DELETE(
  request: Request,
  context: { params: { id: string; vacancy_id: string } }
) {
  return sendCookies({
    request,
    method: 'DELETE',
    service: 'vacancy',
    route: `/demands/${context.params.id}/vacancies/${context.params.vacancy_id}`
  })
}
