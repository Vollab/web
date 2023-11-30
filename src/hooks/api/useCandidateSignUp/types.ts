import { ILinksFormProps } from 'src/components/shared/molecules/LinksForm'

import {
  CandidateSignUpRequest,
  CandidateSignUpResponse
} from 'types-vollab/dist/routes/candidates/sign-up'
import { Role } from 'types-vollab/dist/shared/role'

export interface IUseSignUpParams {
  role: Role
}

export interface IUseCandidateSignUpMutation {
  response: CandidateSignUpResponse
  request: {
    avatar?: FormData
    links: ILinksFormProps['links']
    signup: CandidateSignUpRequest
    activityAreas: { value: string; label: string }[]
  }
}
