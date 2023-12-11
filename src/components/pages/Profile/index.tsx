import { Form } from './Form'

import { MainLayout } from 'src/components/shared/layouts/Main'

export const Profile = () => (
  <MainLayout>
    <main className='content paddingHeader'>
      <Form />
    </main>
  </MainLayout>
)
