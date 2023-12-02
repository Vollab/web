import { IUseEnrollMutation } from './types'

import { useMutation } from 'src/hooks/useMutation'

import { enroll } from 'src/requests/candidates/enroll'

export const useEnroll = () => useMutation<IUseEnrollMutation>(enroll)
