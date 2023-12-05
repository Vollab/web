'use client'

import { Candidate } from './Candidate'
import { Initial } from './Initial'

import { useSignUpContext } from 'src/contexts/SignUp'
import { StepsProvider } from 'src/contexts/SignUp/Steps'

export const Pages = () => {
  const { page } = useSignUpContext()

  return (
    <>
      {page === 'initial' && <Initial />}

      {page === 'candidate' && (
        <StepsProvider>
          <Candidate />
        </StepsProvider>
      )}

      {/* {page === 'orderer' && (
        <StepsProvider>
          <Orderer />
        </StepsProvider>
      )} */}
    </>
  )
}
