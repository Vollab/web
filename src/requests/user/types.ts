import { CurrentUserResponse } from 'types-vollab/dist/routes/current-user/index'

export type TGetUser = () => Promise<CurrentUserResponse & { avatar: any }>
