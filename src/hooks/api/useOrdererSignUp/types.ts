import {
  OrdererSignUpRequest,
  OrdererSignupResponse
} from 'types-vollab/dist/routes/orderers/sign-up'
import { Link } from 'types-vollab/dist/shared/link'
import { Role } from 'types-vollab/dist/shared/role'

export interface IUseSignUpParams {
  role: Role
}

export interface IUseOrdererSignUpMutation {
  request: {
    links: Link[]
    avatar?: FormData
    signup: OrdererSignUpRequest
  }
  response: OrdererSignupResponse
}
