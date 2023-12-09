import { interceptor } from 'src/api/core/interceptor'

import {
  Request,
  Response
} from 'types-vollab/dist/src/modules/auth/api/sign-in/POST'

type TSignIn = (request: Request) => Promise<Response>

export const signIn: TSignIn = request =>
  interceptor({ route: '/sign-in', request, method: 'POST' })
