import { interceptor } from 'src/services/api/interceptor'

import type { Response } from 'types-vollab/dist/src/modules/demands/api/demands/GET'

type TGetDemands = () => Promise<Response>

export const getDemands: TGetDemands = async () =>
  interceptor({ route: '/demands', method: 'GET' })
