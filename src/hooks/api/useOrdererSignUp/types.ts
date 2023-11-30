import { ILinksFormProps } from 'src/components/shared/molecules/LinksForm'

import {
  OrdererSignUpRequest,
  OrdererSignupResponse
} from 'types-vollab/dist/routes/orderers/sign-up'
import { Role } from 'types-vollab/dist/shared/role'

export interface IUseSignUpParams {
  role: Role
}

export interface IUseOrdererSignUpMutation {
  request: {
    avatar?: FormData
    signup: OrdererSignUpRequest
    links: ILinksFormProps['links']
  }
  response: OrdererSignupResponse
}
