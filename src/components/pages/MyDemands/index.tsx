import { AddDemand } from './AddDemand'
import { List } from './List'
import { Title } from './Title'

import { MainLayout } from 'src/components/shared/layouts/Main'

export const MyDemands = () => (
  <MainLayout>
    <main className='content mainLayoutPadding'>
      <header className='flex items-center justify-between h-16'>
        <Title />

        <AddDemand />
      </header>

      <List />
    </main>
  </MainLayout>
)
