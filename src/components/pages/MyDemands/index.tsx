import { AddDemand } from './AddDemand'
import { List } from './List'

import { MainLayout } from 'src/components/shared/layouts/Main'

export const MyDemands = () => (
  <MainLayout>
    <main className='content'>
      <header className='py-4 flex items-center justify-between'>
        <h1 className='text-lg font-semibold'>Minhas Demandas</h1>

        <AddDemand />
      </header>

      <List />
    </main>
  </MainLayout>
)
