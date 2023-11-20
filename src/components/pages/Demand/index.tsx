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

  return (
    <MainLayout hideHeader>
      <main className='space-y-4'>
        <Header
          id={data?.id}
          title={data?.title}
          status={data?.status}
          avatar={data?.orderer.avatar}
        />

        <ul className='px-4 space-y-4 pb-16'>
          <InfoItem title='Resumo'>
            <p className='text-gray-600'>{data?.resume}</p>
          </InfoItem>

          <InfoItem title='Descrição'>
            <p className='text-gray-600'>{data?.description}</p>
          </InfoItem>

          <InfoItem title='Vagas'>
            <p className='text-gray-600'>{data?.description}</p>

            <Vacancies vacancies={data?.vacancies} />
          </InfoItem>
        </ul>
      </main>
    </MainLayout>
  )
}
