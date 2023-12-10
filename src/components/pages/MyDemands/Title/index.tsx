'use client'

import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'

export const Title = () => {
  const { data } = useCurrentUser()

  return (
    <h1 className='text-lg font-semibold'>
      Minhas {data?.user.role === 'candidate' ? 'Candidaturas' : 'Demandas'}
    </h1>
  )
}
