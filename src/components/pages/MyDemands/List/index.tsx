'use client'

import { useDemands } from 'src/api/requests/demands/getAll/useDemands'

import { Demand } from 'src/components/shared/organisms/Demand'

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
