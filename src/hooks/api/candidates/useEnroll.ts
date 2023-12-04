import { useMutation } from 'src/hooks/useMutation'

import { enroll } from 'src/requests/candidates/enroll'

import type {
  Params,
  Response
} from 'types-vollab/dist/modules/vacancy/api/demands/[demand_id]/vacancies/[vacancy_id]/enroll/POST'

interface IUseEnrollMutation {
  request: Params
  response: Response
}

export const useEnroll = () => useMutation<IUseEnrollMutation>(enroll)
