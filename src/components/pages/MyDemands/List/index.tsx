'use client'

import { Demands } from './Demands'
import { Vacancies } from './Vacancies'

import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'

import { slideAnimation } from 'src/components/shared/animations/slideAnimation'

import { motion } from 'framer-motion'

export const List = () => {
  const { data } = useCurrentUser()

  return (
    <motion.ul {...slideAnimation(-1)} className='DefaultGrid'>
      {data?.user.role === 'candidate' ? <Vacancies /> : <Demands />}
    </motion.ul>
  )
}
