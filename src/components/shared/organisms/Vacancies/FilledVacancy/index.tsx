import { useRouter } from 'next/navigation'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { useVacancyContext } from 'src/contexts/Vacancy'

export const FilledVacancy = ({ filledByMe }: { filledByMe?: boolean }) => {
  const { vacancy, demand } = useVacancyContext()
  const { push } = useRouter()

  const onClick = () => {
    push(`/demands/${demand?.id}`)
  }

  return (
    <li>
      <Button
        onClick={onClick}
        className='flex w-full text-left shadow-md rounded-2xl h-full'
      >
        <article
          className='flex flex-col rounded-2xl p-4 border-dashed border-gray-200 border w-full justify-evenly'
          style={{
            backgroundColor: filledByMe
              ? colors.success[500]
              : colors.gray[100],
            borderColor: filledByMe ? 'transparent' : colors.gray[200]
          }}
        >
          <header className='flex items-center justify-between'>
            <h4
              className='text-h6 font-medium'
              style={{ color: filledByMe ? colors.gray[50] : colors.gray[500] }}
            >
              {vacancy?.name} - {vacancy?.activity_area as any}
            </h4>

            <span
              className='font-medium'
              style={{ color: filledByMe ? colors.gray[50] : colors.gray[500] }}
            >
              {vacancy?.workMode?.label}
            </span>
          </header>

          <div
            className='text-gray-500 my-auto py-2'
            style={{ color: filledByMe ? colors.gray[50] : colors.gray[500] }}
          >
            {vacancy?.description}
          </div>

          <span
            className='mt-2 font-bold'
            style={{ color: filledByMe ? colors.gray[50] : colors.gray[500] }}
          >
            {filledByMe ? 'VOCÊ PREENCHEU ESSA VAGA!' : 'VAGA PREENCHIDA'}
          </span>
        </article>
      </Button>
    </li>
  )
}
