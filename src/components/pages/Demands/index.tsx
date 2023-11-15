'use client'

import { Demand } from '../../shared/organisms/Demand'

import { MainLayout } from 'src/components/shared/layouts/MainLayout'

import { useDemands } from 'src/hooks/api/demands/useDemands'

export const Demands = () => {
  const { data } = useDemands({ page: 1 })

  return (
    <MainLayout>
      <main className='content'>
        <header className='py-4'>
          <h1 className='text-lg font-semibold'>Demandas</h1>
        </header>

        <ul className='flex flex-col gap-4 pb-6'>
          {data?.map(demand => (
            <li key={demand.id}>
              <Demand {...demand} />
            </li>
          ))}
        </ul>
      </main>
    </MainLayout>
  )
}
