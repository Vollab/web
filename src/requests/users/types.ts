import { UserResponse } from 'types-vollab/dist/routes/users/[id]'

export type TGetUsers = () => Promise<UserResponse>
