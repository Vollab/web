import { List } from '../Demands/List'

import { MainLayout } from 'src/components/shared/layouts/MainLayout'

export const Projects = () => (
  <MainLayout>
    <main className='content'>
      <header className='py-4'>
        <h1 className='text-lg font-semibold'>Meus Projetos</h1>
      </header>

      <List />
    </main>
  </MainLayout>
)
