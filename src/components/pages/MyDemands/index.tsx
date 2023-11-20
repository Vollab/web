import { List } from './List'

import { MainLayout } from 'src/components/shared/layouts/MainLayout'

export const MyDemands = () => (
  <MainLayout>
    <main className='content'>
      <header className='py-4'>
        <h1 className='text-lg font-semibold'>Minhas Demandas</h1>
      </header>

      <List />
    </main>
  </MainLayout>
)
