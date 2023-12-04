import { interceptor } from 'src/services/api/interceptor'

import type {
  Params,
  Response
} from 'types-vollab/dist/modules/auth/api/orderers/[id]/GET'

type TGetOrderer = ({ id }: Params) => Promise<Response>

export const getOrderer: TGetOrderer = async ({ id }) =>
  interceptor({ route: `/api/users/${id}` })
