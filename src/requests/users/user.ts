import { interceptor } from 'src/services/api/interceptor'

import type {
  Params,
  Response
} from 'types-vollab/dist/src/modules/auth/api/users/[id]/GET'

type TGetUser = ({ id }: Params) => Promise<Response>

export const getUser: TGetUser = async ({ id }) =>
  interceptor({ route: `/api/users/${id}` })
