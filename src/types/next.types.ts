import { ReactNode } from 'react'

export interface IRootLayoutProps {
  children: ReactNode
  params: { locale?: string }
}

export interface IEventParams {
  params: { locale: string; producer: string; eventId: string }
}
