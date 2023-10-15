import { ReactNode } from 'react'

import { TButtonProps, TInputProps } from 'src/types/react.types'

export interface IFieldProps extends TInputProps {
  error?: any
  borderTw?: string
  customTheme?: string
  icon?: ({ fill }: { fill: string }) => ReactNode
  insideButton?: { title: string; onClick: TButtonProps['onClick'] }
}
