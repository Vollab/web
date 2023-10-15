import { ReactNode } from 'react'

export interface IDraggableSliderProps {
  className?: string
  items?: ReactNode[]
  containerTw?: string
  marginRight?: number
  responsiveWidthConstraints?: number[]
}

export interface IUseDraggableSliderParams {
  marginRight: IDraggableSliderProps['marginRight']
  responsiveWidthConstraints?: IDraggableSliderProps['responsiveWidthConstraints']
}
