import { CurrentUserResponse } from 'types-vollab/dist/routes/current-user'

export interface IUseUserQuery {
  response: CurrentUserResponse['user'] & { avatar: any }
}
