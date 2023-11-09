import { Demand } from './Demand'

import { MainLayout } from 'src/components/shared/layouts/MainLayout'

export const Demands = () => (
  <MainLayout>
    <main className='content'>
      <header className='py-4'>
        <h1 className='text-lg font-semibold'>Demandas</h1>
      </header>

      <ul className='flex flex-col gap-4 pb-6'>
        {new Array(10).fill('').map((_, index) => (
          <li key={index}>
            <Demand
              id='1'
              title='Ticpass'
              status='opened'
              orderer={{ id: '1', name: 'Gabriel Augusto' }}
              resume='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, fuga eos. Aliquam temporibus voluptas corrupti perspiciatis, nobis architecto, distinctio asperiores excepturi voluptates quidem sapiente nam saepe blanditiis libero facere et.'
              vacancies={[
                { id: '2', name: 'Design', workMode: 'remote' },
                { id: '3', name: 'CEO', workMode: 'in_person' },
                { id: '1', name: 'Programador', workMode: 'hybrid' }
              ]}
            />
          </li>
        ))}
      </ul>
    </main>
  </MainLayout>
)
