import { Description } from './Description'
import { Resume } from './Resume'
import { Vacancies } from './Vacancies'

export const Info = () => (
  <ul className='content py-4 space-y-4'>
    <h2 className='text-xl font-medium'>Sobre</h2>

    <div className='flex flex-col bg-gray-50 rounded-xl shadow-md p-4 gap-y-4'>
      <Resume />
      <Description />
    </div>

    <Vacancies />
  </ul>
)
