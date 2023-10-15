import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--poppins-font',
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const useRootLayout = async () => {
  return { poppins: poppins.variable }
}
