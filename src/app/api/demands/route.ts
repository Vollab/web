import { sendCookies } from 'src/utils/next/cookies/send'

export const GET = () => sendCookies({ route: '/demands', service: 'demand' })
