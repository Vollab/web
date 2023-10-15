import { Metadata } from 'next'

export const generateMetadata = (): Metadata => {
  return {
    title: 'App',
    manifest: '/manifest.json'
  }
}
