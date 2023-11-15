import { UserParams, UserResponse } from 'common/types/routes/users/id'

export interface IUserResponse extends Omit<UserResponse, 'location'> {
  location: string
}

export type TSelectUser = (data: UserResponse) => IUserResponse
export type TGetUser = (params: UserParams) => Promise<UserResponse>
