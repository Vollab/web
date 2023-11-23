import { Pages } from './Pages'

import { SignUpProvider } from 'src/contexts/SignUp'

export const SignUp = () => (
  <SignUpProvider>
    <Pages />
  </SignUpProvider>
)
