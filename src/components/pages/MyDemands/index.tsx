import { AddDemand } from './AddDemand'
import { List } from './List'
import { Title } from './Title'

import { MainLayout } from 'src/components/shared/layouts/Main'

export const MyDemands = () => (
  <MainLayout>
    <main className='content'>
      <header className='py-4 flex items-center justify-between'>
        <Title />

        <AddDemand />
      </header>

      <List />
    </main>
  </MainLayout>
)
