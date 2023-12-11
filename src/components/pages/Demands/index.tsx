import { List } from './List'

import { MainLayout } from 'src/components/shared/layouts/Main'

export const Demands = () => {
  return (
    <MainLayout>
      <main className='content mainLayoutPadding '>
        <header className='py-4 h-16 flex items-center'>
          <h1 className='text-lg font-semibold'>Demandas</h1>
        </header>

        <List />
      </main>
    </MainLayout>
  )
}
