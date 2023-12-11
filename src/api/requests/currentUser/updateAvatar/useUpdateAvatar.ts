import { updateAvatar } from './updateAvatar'

import { useMutation } from 'react-query'

export const useUpdateAvatar = () => useMutation(updateAvatar)
