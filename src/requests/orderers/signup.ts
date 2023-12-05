import { interceptor } from 'src/services/api/interceptor'

import type {
  Request,
  Response
} from 'types-vollab/dist/src/modules/auth/api/candidates/sign-up/POST'

type TSignUp = (request: Request) => Promise<Response>

export const signup: TSignUp = request =>
  interceptor({ route: '/candidates/sign-up', request, method: 'POST' })
