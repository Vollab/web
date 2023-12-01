import { Header } from './Header'
import { InfoItem } from './InfoItem'
import { Vacancies } from './Vacancies'

import { MainLayout } from 'src/components/shared/layouts/MainLayout'

import { getDemand } from 'src/requests/demands/getDemand'

interface IDemandProps {
  id: string
}

export const Demand = async ({ id }: IDemandProps) => {
  const data = await getDemand({ id })

  const demand = data.demand

  return (
    <MainLayout hideHeader>
      <main className='space-y-4'>
        <Header
          id={demand?.id}
          title={demand?.title}
          status={demand?.status}
          avatar={demand?.orderer.avatar}
        />

        <ul className='px-4 space-y-4 pb-16'>
          <InfoItem title='Resumo'>
            <p className='text-gray-600'>{demand?.resume}</p>
          </InfoItem>

          <InfoItem title='Descrição'>
            <p className='text-gray-600'>{demand?.description}</p>
          </InfoItem>

          <InfoItem title='Vagas'>
            <p className='text-gray-600'>{demand?.description}</p>

            <Vacancies vacancies={demand?.vacancies} />
          </InfoItem>
        </ul>
      </main>
    </MainLayout>
  )
}
