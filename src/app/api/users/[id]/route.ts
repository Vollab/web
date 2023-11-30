import { sendCookies } from 'src/utils/next/sendCookies'

export const GET = async (_req: Request, context: { params: any }) =>
  sendCookies({ route: `/users/${context.params.id}`, service: 'auth' })
