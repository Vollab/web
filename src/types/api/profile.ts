import { ILink } from '../shared.types'

export interface IProfileResponse {
  id: string
  bio: string
  name: string
  city: string
  email: string
  phone: string
  state: string
  links: ILink[]
  activityAreas: string[]
}
