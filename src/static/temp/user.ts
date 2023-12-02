import { usersResponse } from './users'

import { Response } from 'types-vollab/dist/v2/auth/api/current-user/GET'

export const userResponse: Response = {
  user: usersResponse.users[0]
}
