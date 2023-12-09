import { Form } from './Form'

import { MainLayout } from 'src/components/shared/layouts/Main'

export const CreateDemand = () => (
  <MainLayout>
    <main className='content'>
      <header className='py-4 flex items-center justify-between'>
        <h1 className='text-lg font-semibold'>Criar demanda</h1>
      </header>

      <Form />
    </main>
  </MainLayout>
)
