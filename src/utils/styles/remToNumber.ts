import { TTransforms } from './types'

export const remToNumber: TTransforms = value =>
  typeof value === 'string' ? Number(value.split('r')[0]) : value
