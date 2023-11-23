import {
  OrdererSignUpRequest,
  OrdererSignupResponse
} from 'types-vollab/dist/routes/orderers/sign-up'
import { Role } from 'types-vollab/dist/shared/role'

export interface IUseSignUpParams {
  role: Role
}

export interface IUseOrdererSignUpMutation {
  request: OrdererSignUpRequest
  response: OrdererSignupResponse
}
