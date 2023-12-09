import { updateDemand } from './updateDemand'

import { queryClient } from 'src/contexts/ReactQuery'

import { useMutation } from 'src/hooks/ReactQuery/useMutation'

import {
  Params,
  Request,
  Response
} from 'types-vollab/dist/src/modules/demands/api/demands/[id]/PATCH'

interface IUseUpdateDemandMutation {
  request: Params & Request
  response: Response
}

export const useUpdateDemand = () =>
  useMutation<IUseUpdateDemandMutation>(updateDemand, {
    onSuccess: (data, { id }) => {
      queryClient.setQueryData(['demand', id], data)
    }
  })
