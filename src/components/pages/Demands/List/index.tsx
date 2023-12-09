'use client'

import { useDemands } from 'src/api/requests/demands/getAll/useDemands'

import { colors } from 'src/styles/custom/colors'

import { Loading } from 'src/components/shared/atoms/Loading'
import { Demand } from 'src/components/shared/organisms/Demand'

export const List = () => {
  const { data, isLoading } = useDemands()

  return (
    <ul className='flex flex-col gap-4 pb-6 relative'>
      {isLoading ? (
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
