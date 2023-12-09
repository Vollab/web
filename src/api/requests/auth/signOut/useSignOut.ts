import { signOut } from './signOut'

import { useMutation } from 'src/hooks/ReactQuery/useMutation'

export const useSignOut = () => useMutation(signOut)
