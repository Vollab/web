import { interceptor } from 'src/api/core/interceptor'

export const updateCandidate = async ({ ...request }: any) =>
  interceptor({ route: `/candidates`, method: 'PATCH', request })
