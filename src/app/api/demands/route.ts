import { sendCookies } from 'src/utils/next/sendCookies'

export const GET = () => sendCookies({ route: '/demands', service: 'demand' })
