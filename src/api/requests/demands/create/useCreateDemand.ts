import { createDemand } from './createDemand'

import { useMutation } from 'src/hooks/ReactQuery/useMutation'

export const useCreateDemand = () => useMutation(createDemand)
