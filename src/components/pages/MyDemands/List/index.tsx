'use client'

import { Demand } from 'src/components/shared/organisms/Demand'

import { useDemands } from 'src/hooks/api/demands/useDemands'

export const List = () => {
  const { data } = useDemands()

  return (
    <ul className='flex flex-col gap-4 pb-6'>
      {data?.demands.map(
        ({ id, orderer, resume, status, title, vacancies }) => (
          <li key={id}>
            <Demand
              demand={{ id, title, resume, status, orderer, vacancies }}
            />
          </li>
        )
      )}
    </ul>
  )
}
