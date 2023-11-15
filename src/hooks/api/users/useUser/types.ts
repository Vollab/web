import { UserResponse } from 'common/types/routes/users/id'

interface IUserResponse extends Omit<UserResponse, 'location'> {
  location: string
}

export interface IUseUserQuery {
  response: IUserResponse
}
