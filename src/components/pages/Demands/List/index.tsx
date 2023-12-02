'use client'

import { colors } from 'src/styles/custom/colors'

import { Loading } from 'src/components/shared/atoms/Loading'
import { Demand } from 'src/components/shared/organisms/Demand'

import { useDemands } from 'src/hooks/api/demands/useDemands'

export const List = () => {
  const { data } = useDemands()

  return (
    <ul className='flex flex-col gap-4 pb-6 relative'>
      {data?.demands.length === 0 ? (
        <Loading
          fill={colors.primary[500]}
          className='left-1/2 -translate-x-1/2'
        />
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
    </ul>
  )
}
