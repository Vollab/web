import { interceptor } from 'src/api/core/interceptor'

import {
  Request,
  Response
} from 'types-vollab/dist/src/modules/auth/api/candidates/sign-up/POST'

type TSignUpOrderer = (request: Request) => Promise<Response>

export const signUpOrderer: TSignUpOrderer = request =>
  interceptor({ route: '/candidates/sign-up', request, method: 'POST' })
