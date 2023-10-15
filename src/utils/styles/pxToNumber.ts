import { TTransforms } from './types'

export const pxToNumber: TTransforms = value =>
  typeof value === 'string' ? Number(value.split('p')[0]) : value
