import { useRouter } from 'next/navigation'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { CloseButton } from 'src/components/shared/groups/Buttons/CloseButton'

import { useVacancyContext } from 'src/contexts/Vacancy'

import { twMerge } from 'tailwind-merge'

interface IHeaderProps {
  onDeleteClick: () => void
}

export const Header = ({ onDeleteClick }: IHeaderProps) => {
  const { push } = useRouter()
  const { vacancy, demand, isOwner } = useVacancyContext()

  const onNameClick = () => {
    push(`/demands/${demand?.id}`)
  }

  return (
    <header className='flex items-center justify-between p-4 pb-0 gap-x-4'>
      <div className='flex items-center justify-center relative'>
        {isOwner && (
          <CloseButton
            onClick={onDeleteClick}
            className='absolute left-0 hidden group-hover:flex'
          />
        )}

        <Button
          onClick={onNameClick}
          className={twMerge(
            'group-hover transition-all duration-200',
            isOwner ? 'group-hover:ml-8' : ''
          )}
        >
          <h4 className='text-xl font-medium text-primary-500 break-all capitalize'>
            {vacancy?.name}
          </h4>
        </Button>
      </div>

      <span className='font-medium' style={{ color: vacancy?.workMode?.color }}>
        {vacancy?.workMode?.label}
      </span>
    </header>
  )
}
