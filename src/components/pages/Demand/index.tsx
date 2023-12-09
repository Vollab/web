import { Description } from './Description'
import { InfoItem } from './InfoItem'
import { OrdererAvatar } from './OrdererAvatar'
import { Resume } from './Resume'
import { Status } from './Status'
import { Title } from './Title'
import { Vacancies } from './Vacancies'

import { MainLayout } from 'src/components/shared/layouts/Main'

import { DemandProvider } from 'src/contexts/Demand'

interface IDemandProps {
  id: string
}

export const Demand = ({ id }: IDemandProps) => (
  <MainLayout hideHeader>
    <DemandProvider id={id}>
      <main className='space-y-4'>
        <header className='px-4 gap-x-4 gap-y-2 grid grid-cols-4 mt-6'>
          <Title />
          <OrdererAvatar />
          <Status />
        </header>

        <ul className='px-4 space-y-4 pb-16'>
          <Resume />

          <Description />

          <InfoItem title='Vagas'>
            <Vacancies />
          </InfoItem>
        </ul>
      </main>
    </DemandProvider>
  </MainLayout>
)
