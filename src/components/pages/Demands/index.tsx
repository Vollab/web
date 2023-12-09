import { List } from './List'

import { MainLayout } from 'src/components/shared/layouts/Main'

export const Demands = () => (
  <MainLayout>
    <main className='content'>
      <header className='py-4'>
        <h1 className='text-lg font-semibold'>Demandas</h1>
      </header>

      <List />
    </main>
  </MainLayout>
)
