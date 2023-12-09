import { getAvatar } from './getAvatar'

import { useQuery } from 'src/hooks/ReactQuery/useQuery'

import {
  Params,
  Response
} from 'types-vollab/dist/src/modules/auth/api/users/[id]/avatar/GET'

export interface IUseAvatarQuery {
  response: Response
}

export const useAvatar = ({ id }: Partial<Params>) =>
  useQuery<IUseAvatarQuery>(
    ['avatar', id || ''],
    () => getAvatar({ id: id || '' }),
    {
      enabled: !!id
    }
  )
