import { sendCookies } from 'src/utils/next/sendCookies'

export const GET = (_req: Request, context: { params: any }) =>
  sendCookies({
    service: 'vacancy',
    route: `/demands/${context.params.id}/vacancies`
  })
