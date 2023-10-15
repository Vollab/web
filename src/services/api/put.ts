import { IApiParams } from './types'

import { post } from './post'

export const put = async ({ ...props }: IApiParams) =>
  post({ ...props, method: 'PUT' })
