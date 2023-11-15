'use client'

import { Demand } from 'src/components/shared/organisms/Demand'

import { useDemands } from 'src/hooks/api/demands/useDemands'

export const List = () => {
  const { data } = useDemands({ page: 1 })

  return (
    <ul className='flex flex-col gap-4 pb-6'>
      {data?.map(demand => (
        <li key={demand.id}>
          <Demand {...demand} />
        </li>
      ))}
    </ul>
  )
}
