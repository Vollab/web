import { SignInRequest } from 'types-vollab/dist/routes/sign-in'
import { Response } from 'types-vollab/dist/v2/auth/api/activity-areas/GET'

export interface IUseSignInMutation {
  request: SignInRequest
  response: Response
}
