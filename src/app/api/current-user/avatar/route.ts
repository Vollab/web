import { sendCookies } from 'src/utils/next/sendCookies'

export const GET = () =>
  sendCookies({ route: '/current-user/avatar', service: 'auth' })
