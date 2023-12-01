import { UserParams, UserResponse } from 'types-vollab/dist/routes/users/[id]'

export type TGetUsers = ({
  id
}: UserParams) => Promise<UserResponse['user'] & { avatar: any }>
