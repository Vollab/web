import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

import { interceptor } from 'src/services/api/interceptor'

type TGetUser = ({ id }: Params) => Promise<Response>

export const getUser: TGetUser = async ({ id }) =>
  interceptor({ route: `/api/users/${id}` })
