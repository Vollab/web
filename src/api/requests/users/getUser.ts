import { interceptor } from 'src/api/core/interceptor'

import {
  Params,
  Response
} from 'types-vollab/dist/src/modules/auth/api/candidates/[id]/GET'

type TGetUser = ({ id }: Params) => Promise<Response>

export const getUser: TGetUser = async ({ id }) =>
  interceptor({ route: `/api/users/${id}` })
