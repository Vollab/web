import { Demand } from '../../shared/organisms/Demand'

import { MainLayout } from 'src/components/shared/layouts/MainLayout'

export const Projects = () => (
  <MainLayout>
    <main className='content'>
      <header className='py-4'>
        <h1 className='text-lg font-semibold'>Meus Projetos</h1>
      </header>

      <ul className='flex flex-col gap-4 pb-6'>
        {new Array(1).fill('').map((_, index) => (
          <li key={index}>
            <Demand
              id='1'
              title='Ticpass'
              status='opened'
              orderer={{ id: '1', name: 'Gabriel Augusto' }}
              resume='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, fuga eos. Aliquam temporibus voluptas corrupti perspiciatis, nobis architecto, distinctio asperiores excepturi voluptates quidem sapiente nam saepe blanditiis libero facere et.'
              vacancies={[
                {
                  id: '1',
                  status: 'approved',
                  workMode: 'hybrid',
                  name: 'Programador'
                },
                {
                  id: '2',
                  status: 'pending',
                  workMode: 'remote',
                  name: 'Design'
                }
              ]}
            />
          </li>
        ))}
      </ul>
    </main>
  </MainLayout>
)
