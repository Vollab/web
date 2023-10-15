import { IFieldProps } from '../Field/types'

import { ReactNode } from 'react'

export interface IFieldLabelProps extends IFieldProps {
  title: string
  fieldTw?: string
  titleTw?: string
  secondTitle?: ReactNode
  className?: string
}
