import { Description } from './Description'
import { Header } from './Header'
import { InfoItem } from './InfoItem'
import { Resume } from './Resume'
import { Vacancies } from './Vacancies'

import { MainLayout } from 'src/components/shared/layouts/MainLayout'

import { DemandProvider } from 'src/contexts/Demand'

import { getDemand } from 'src/requests/demands/demand'

interface IDemandProps {
  id: string
}

export const Demand = async ({ id }: IDemandProps) => {
  const data = await getDemand({ id })
  const demand = data.demand
  const vacancies = data.vacancies

  return (
    <MainLayout hideHeader>
      <DemandProvider demand={demand}>
        <main className='space-y-4'>
          <Header
            id={demand.id}
            title={demand.title}
            status={demand.status}
            ordererId={demand.orderer.id}
          />

          <ul className='px-4 space-y-4 pb-16'>
            <Resume />

            <Description />

            <InfoItem title='Vagas'>
              <Vacancies vacancies={vacancies} demandId={id} />
            </InfoItem>
          </ul>
        </main>
      </DemandProvider>
    </MainLayout>
  )
}
