import { IAcceptParams, accept } from './accept'
import { IApproveParams, approve } from './approve'
import { IRefuseParams, refuse } from './refuse'
import { IUnenrollParams, unenroll } from './unenroll'

import { queryClient } from 'src/contexts/ReactQuery'

import { useMutation } from 'src/hooks/ReactQuery/useMutation'

export interface IResponse {
  enrollment: any
}

export const useEnrollment = () => {
  const { mutateAsync: mutateApprove } = useMutation<{
    request: IApproveParams
    response: IResponse
  }>(approve)

  const { mutateAsync: mutateRefuse } = useMutation<{
    request: IRefuseParams
    response: IResponse
  }>(refuse)

  const { mutateAsync: mutateAccept } = useMutation<{
    request: IAcceptParams
    response: IResponse
  }>(accept, {
    onSuccess: () => {
      queryClient.refetchQueries('current-vacancies')
    }
  })

  const { mutateAsync: mutateUnenroll } = useMutation<{
    request: IUnenrollParams
    response: IResponse
  }>(unenroll, {
    onSuccess: () => {
      queryClient.refetchQueries('current-vacancies')
    }
  })

  return { mutateAccept, mutateRefuse, mutateApprove, mutateUnenroll }
}
