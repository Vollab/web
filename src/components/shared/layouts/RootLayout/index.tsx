/* eslint-disable @next/next/no-head-element */
import { useRootLayout } from './useRootLayout'

import { IRootLayoutProps } from 'src/types/next.types'

import 'src/styles/globals.css'

import { GlobalProvider } from 'src/contexts/Global'

const RootLayout = async ({ children }: IRootLayoutProps) => {
  const { poppins } = await useRootLayout()

  return (
    <html lang='pt-BR' className={poppins}>
      <head>
        <link rel='icon' type='image/png' href='./favicon.png' />
      </head>

      <body className='light'>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  )
}

export default RootLayout
