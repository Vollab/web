import { ErrorResponse } from 'types-vollab/dist/shared/error'

export interface IGQuery {
  response: any
}

export interface IUseQuery {
  error: ErrorResponse
  context: any
}
