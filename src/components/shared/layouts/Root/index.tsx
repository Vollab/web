/* eslint-disable @next/next/no-head-element */
import { PageProtection } from '../../atoms/PageProtection'
import { Portals } from './Portals'

import { Poppins } from 'next/font/google'
import { IRootLayoutProps } from 'src/types/next.types'

import 'src/styles/globals.css'

import { GlobalProvider } from 'src/contexts/Global'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--poppins-font',
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const RootLayout = ({ children }: IRootLayoutProps) => (
  <html lang='pt-BR'>
    <head>
      <link rel='icon' type='image/png' href='./favicon.png' />
      <link rel='manifest' href='/manifest.json' />
    </head>

    <body className={poppins.variable}>
      <GlobalProvider>
        <Portals />

        <PageProtection>{children}</PageProtection>
      </GlobalProvider>
    </body>
  </html>
)

export default RootLayout
