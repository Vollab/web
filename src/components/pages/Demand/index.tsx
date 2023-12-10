import { Footer } from './Footer'
import { Header } from './Header'
import { Info } from './Info'

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
        <Info />
        <Footer />
      </main>
    </DemandProvider>
  </MainLayout>
)
