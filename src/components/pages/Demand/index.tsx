import { Footer } from './Footer'
import { Header } from './Header'
import { Info } from './Info'

import { Motion } from 'src/components/shared/atoms/Motion'
import { MainLayout } from 'src/components/shared/layouts/Main'

import { DemandProvider } from 'src/contexts/Demand'

interface IDemandProps {
  id: string
}

export const Demand = ({ id }: IDemandProps) => (
  <MainLayout hideHeader>
    <DemandProvider id={id}>
      <Header />

      <Motion
        animation={{
          animate: {
            opacity: [0, 1],
            transition: { duration: 0.5 }
          }
        }}
      >
        <Info />
        <Footer />
      </Motion>
    </DemandProvider>
  </MainLayout>
)
