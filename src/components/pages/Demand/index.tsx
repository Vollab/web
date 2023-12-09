import { Description } from './Description'
import { Header } from './Header'
import { InfoItem } from './InfoItem'
import { Resume } from './Resume'
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
        <Header />

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
