import { interceptor } from 'src/api/core/interceptor'

import { Response } from 'types-vollab/dist/src/modules/demands/api/demands/GET'

type TGetDemands = () => Promise<Response>

export const getDemands: TGetDemands = () =>
  interceptor({ route: '/demands', method: 'GET' })
