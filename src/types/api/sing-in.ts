import { TRole } from '../shared.types'

export interface ISingInResponse {
  id: string
  role: TRole
  name: string
  token: string
  avatar: string
}
