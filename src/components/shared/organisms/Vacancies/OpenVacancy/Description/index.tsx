import { useVacancyContext } from 'src/contexts/Vacancy'

export const Description = () => {
  const { vacancy } = useVacancyContext()

  return (
    <p className='px-4 text-gray-500 mt-1 break-all md:h-full'>
      {vacancy?.description}
    </p>
  )
}
