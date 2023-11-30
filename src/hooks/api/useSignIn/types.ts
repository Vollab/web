import { CurrentUserResponse } from 'types-vollab/dist/routes/current-user'
import { SignInRequest } from 'types-vollab/dist/routes/sign-in'

export interface IUseSignInMutation {
  response: CurrentUserResponse['user'] & { avatar: any }
  request: SignInRequest
}
