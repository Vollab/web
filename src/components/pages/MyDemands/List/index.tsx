'use client'

import { Demands } from './Demands'
import { Vacancies } from './Vacancies'

import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'

export const List = () => {
  const { data } = useCurrentUser()

  return (
    <ul className='flex flex-col gap-4 pb-6'>
      {data?.user.role === 'candidate' ? <Vacancies /> : <Demands />}
    </ul>
  )
}
