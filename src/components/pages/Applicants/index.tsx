import { List } from './List'

import { BackButton } from 'src/components/shared/groups/Buttons/BackButton'
import { MainLayout } from 'src/components/shared/layouts/Main'

export interface IApplicantsProps {
  demand_id: string
  vacancy_id: string
}

export const Applicants = (props: IApplicantsProps) => (
  <MainLayout>
    <main className='content paddingHeader'>
      <header className='py-6 flex gap-x-2'>
        <BackButton fill='#000'>
          <h1 className='text-lg font-semibold'>Candidatados</h1>
        </BackButton>
      </header>

      <List {...props} />
    </main>
  </MainLayout>
)
