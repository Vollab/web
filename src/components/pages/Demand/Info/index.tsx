import { Description } from './Description'
import { Resume } from './Resume'
import { Vacancies } from './Vacancies'

export const Info = () => (
  <ul className='px-4 space-y-4'>
    <Resume />
    <Description />
    <Vacancies />
  </ul>
)
