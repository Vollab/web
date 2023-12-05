import { queryClient } from 'src/contexts/ReactQuery'

import { useMutation } from 'src/hooks/useMutation'

import { updateDemand } from 'src/requests/demands/update'

import type {
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
      queryClient.setQueryData(['demands', id], data)
    }
  })
