import { sendCookies } from 'src/utils/next/sendCookies'

export const GET = (_req: Request, context: { params: any }) =>
  sendCookies({
    route: `/users/${context.params.id}/avatar`,
    service: 'auth'
  })