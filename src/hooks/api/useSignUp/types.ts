import { Role } from 'common/types/routes/shared'
import { SignUpRequest, SignUpResponse } from 'common/types/routes/signUp/index'

export interface IUseSignUpParams {
  role: Role
}

export interface IUseSignUpMutation {
  request: SignUpRequest
  response: SignUpResponse
}
