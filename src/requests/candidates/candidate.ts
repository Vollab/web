import { interceptor } from 'src/services/api/interceptor'

import type {
  Params,
  Response
} from 'types-vollab/dist/src/modules/auth/api/candidates/[id]/GET'

type TGetCandidate = ({ id }: Params) => Promise<Response>

export const getCandidate: TGetCandidate = async ({ id }) =>
  interceptor({ route: `/api/users/${id}` })
