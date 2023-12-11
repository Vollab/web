import { enroll } from './enroll'

import { queryClient } from 'src/contexts/ReactQuery'

import { useMutation } from 'src/hooks/ReactQuery/useMutation'

import {
  Params,
  Response
} from 'types-vollab/dist/src/modules/vacancy/api/demands/[demand_id]/vacancies/[vacancy_id]/enroll/POST'

interface IUseEnrollMutation {
  request: Params
  response: Response
}

export const useEnroll = () =>
  useMutation<IUseEnrollMutation>(enroll, {
    onSuccess: () => {
      queryClient.refetchQueries('current-vacancies')
    }
  })
