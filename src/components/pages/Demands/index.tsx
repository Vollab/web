import { ActivityLabel } from './ActivityLabel'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/atoms/Button'
import { MainLayout } from 'src/components/shared/layouts/MainLayout'

import { Avatar } from 'src/assets/icons'

export const Demands = () => (
  <MainLayout>
    <main className='px-4 pt-20 pb-14'>
      <header className='py-4'>
        <h1 className='text-lg font-semibold'>Demandas</h1>
      </header>

      <ul className='flex flex-col gap-4 pb-6'>
        {new Array(10).fill('').map((_, index) => (
          <li key={index}>
            <article className='rounded-2xl shadow-md p-4'>
              <header className='flex gap-2 items-center'>
                <Avatar className='h-11 w-11' fill={colors.primary[500]} />

                <div className='flex flex-col gap-1'>
                  <h3 className='text-md font-medium'>Gabriel Augusto</h3>

                  <Button className='text-left text-primary-500 text-sm font-medium'>
                    Ver perfil
                  </Button>
                </div>
              </header>

              <h2 className='text-lg font-semibold mt-3'>
                Programador Front-end (2)
              </h2>

              <span className='block mt-1 mb-3 text-success-500 font-medium'>
                Em aberto
              </span>

              <p>
                Lorem ipsum dolor sit amet consectetur. Amet risus sollicitudin
                commodo magna rhoncus. Faucibus tincidunt viverra iverra iverra
                Faucibus tincidunt viverra iverra iverra tristiq.
              </p>

              <footer>
                <ul className='flex mt-3'>
                  <li>
                    <ActivityLabel
                      quantity={2}
                      name='Programador'
                      workMode='hybrid'
                    />
                  </li>
                </ul>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </main>
  </MainLayout>
)
