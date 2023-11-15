import { ErrorResponse } from 'common/types/routes/shared'

export interface IGQuery {
  response: any
}

export interface IUseQuery {
  error: ErrorResponse
  context: any
}
