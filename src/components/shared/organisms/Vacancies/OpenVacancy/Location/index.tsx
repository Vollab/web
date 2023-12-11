import { useVacancyContext } from 'src/contexts/Vacancy'

export const Location = () => {
  const { vacancy } = useVacancyContext()

  return vacancy?.work_mode !== 'REMOTE' ? (
    <span className='font-medium text-gray-500 px-4 break-all'>
      {vacancy?.state}, {vacancy?.city}
    </span>
  ) : (
    <></>
  )
}
