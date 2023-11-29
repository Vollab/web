export type TService = 'auth' | 'demand' | 'vacancy'

export const services: Record<TService, string> = {
  auth: process.env.NEXT_PUBLIC_API_AUTH_URL || '',
  demand: process.env.NEXT_PUBLIC_API_DEMAND_URL || '',
  vacancy: process.env.NEXT_PUBLIC_API_VACANCY_URL || ''
}
