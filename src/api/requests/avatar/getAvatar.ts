import { interceptor } from 'src/api/core/interceptor'

import {
  Params,
  Response
} from 'types-vollab/dist/src/modules/auth/api/users/[id]/avatar/GET'

type TGetAvatar = ({ id }: Params) => Promise<Response>

export const getAvatar: TGetAvatar = ({ id }) =>
  interceptor({ route: `/users/${id}/avatar` })
