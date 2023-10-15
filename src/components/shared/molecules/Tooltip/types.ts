import { ReactNode } from 'react'

export interface ITooltipProps {
  color?: string
  arrowTw?: string
  content: (open: boolean) => ReactNode | string
  trigger: (open: boolean) => ReactNode | string
}
