import { SignInRequest, SignInResponse } from 'common/types/routes/signIn/index'

export interface IUseSignInMutation {
  request: SignInRequest
  response: SignInResponse
}
