import { UserParams, UserResponse } from 'types-vollab/dist/routes/users/[id]'

export type TFindUser = ({ id }: UserParams) => Promise<{
  user: UserResponse['user'] & { avatar: any }
}>
