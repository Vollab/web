import { interceptor } from 'src/api/core/interceptor'

import {
  Params,
  Response
} from 'types-vollab/dist/src/modules/auth/api/candidates/[id]/GET'

type TGetUserCandidate = ({ id }: Params) => Promise<Response>

export const getUserCandidate: TGetUserCandidate = async ({ id }) =>
  interceptor({ route: `/candidates/${id}` })
