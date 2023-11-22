import { transformToArray } from './transformToArray'

import { IInfo } from 'src/components/shared/molecules/Toast'

export const generateToasts = (error: any) => {
  const errors: { message: string }[] = transformToArray(error)
  const infos: IInfo[] = []

  errors.forEach(error => {
    infos.push({ content: error.message, variant: 'error' })
  })

  return infos
}
