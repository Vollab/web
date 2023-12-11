'use client'

import { useDemands } from 'src/api/requests/demands/getAll/useDemands'

import { colors } from 'src/styles/custom/colors'

import { slideAnimation } from 'src/components/shared/animations/slideAnimation'
import { Loading } from 'src/components/shared/atoms/Loading'
import { Demand } from 'src/components/shared/organisms/Demand'

import { motion } from 'framer-motion'

export const List = () => {
  const { data, isLoading } = useDemands()

  return (
    <motion.ul {...slideAnimation()} layout='position' className='DefaultGrid'>
      {isLoading ? (
        <Loading fill={colors.primary[500]} />
      ) : (
        data?.demands.map(
          ({ id, orderer, resume, status, title, vacancies }) => (
            <li key={id}>
              <Demand
                demand={{ id, title, resume, status, orderer, vacancies }}
              />
            </li>
          )
        )
      )}
    </motion.ul>
  )
}
