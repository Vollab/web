import { Status } from './Status'

import { useRouter } from 'next/navigation'

import { useEffect, useRef } from 'react'

import { useDeleteVacancy } from 'src/api/requests/demands/vacancies/delete/useDeleteVacancy'
import { useApplicants } from 'src/api/requests/demands/vacancies/getApplicants/useApplicants'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { CloseButton } from 'src/components/shared/groups/Buttons/CloseButton'
import { ConfirmModal } from 'src/components/shared/groups/Modals/ConfirmModal'
import { IForwardModal } from 'src/components/shared/molecules/Modal/types'

import { useDemandContext } from 'src/contexts/Demand'
import { queryClient } from 'src/contexts/ReactQuery'
import { useToastContext } from 'src/contexts/Toast'

import { infos } from 'src/static/infos'

import { TVacancy } from 'src/utils/addStatusInVacancies'

interface IOpenVacancyProps {
  vacancy: TVacancy & { demand_id?: string }
}

export const OpenVacancy = ({
  vacancy: { id, name, city, state, work_mode, description, status, demand_id }
}: IOpenVacancyProps) => {
  const { push } = useRouter()
  const { toastRef } = useToastContext()
  const { mutateAsync } = useDeleteVacancy()
  const { isOwner, demand } = useDemandContext()
  const confirmRemoveModalRef = useRef<IForwardModal>(null)
  const { data, refetch } = useApplicants({
    vacancy_id: id,
    demand_id: demand?.id
  })

  const applicantsQuantity = data?.enrollments ? data.enrollments.length : 0

  useEffect(() => {
    refetch()
  }, [refetch])

  const onCancelConfirmDeleteVacancyClick = () => {
    confirmRemoveModalRef.current?.triggerModal({ open: false })
  }

  const onConfirmDeleteVacancyClick = async () => {
    confirmRemoveModalRef.current?.triggerModal({ open: false })

    if (!demand?.id || !id) {
      toastRef?.current?.triggerToast([{ variant: 'error' }])
      return
    }

    const { vacancy } = await mutateAsync({
      vacancy_id: id,
      demand_id: demand?.id
    })

    if (!vacancy) {
      toastRef?.current?.triggerToast([{ variant: 'error' }])
      return
    }

    queryClient.refetchQueries(['demand/vacancies', demand.id])

    toastRef?.current?.triggerToast([
      { content: 'Vaga removida!', variant: 'success' }
    ])
  }

  const onApplicantsClick = () => {
    push(`/demands/${demand?.id}/applicants/${id}`)
  }

  return (
    <>
      <li>
        <article className='flex flex-col gap-1 rounded-2xl shadow-md overflow-hidden group h-full bg-gray-50'>
          <header className='flex items-center justify-between p-4 pb-0 gap-x-4'>
            <div className='flex items-center justify-center relative'>
              {isOwner && (
                <CloseButton
                  className='absolute left-0 hidden group-hover:flex'
                  onClick={() =>
                    confirmRemoveModalRef.current?.triggerModal({ open: true })
                  }
                />
              )}

              <Button
                onClick={() => push(`/demands/${demand_id}`)}
                className='group-hover group-hover:ml-8 transition-all duration-200'
              >
                <h4 className='text-xl font-medium text-primary-500 break-all capitalize'>
                  {name}
                </h4>
              </Button>
            </div>

            <span
              className='font-medium'
              style={{ color: infos.vacancyWorkMode[work_mode].color }}
            >
              {infos.vacancyWorkMode[work_mode].label}
            </span>
          </header>

          {work_mode !== 'REMOTE' && (
            <span className='font-medium text-gray-500 px-4 break-all'>
              {state}, {city}
            </span>
          )}

          <p className='px-4 text-gray-500 mt-1 break-all md:h-full'>
            {description[0].toUpperCase()}
            {description.substring(1)}
          </p>

          {isOwner && (
            <Button
              onClick={onApplicantsClick}
              className='pl-4 pt-2 text-warning-600 hover:text-warning-500 text-left'
            >
              Candidaturas ({applicantsQuantity})
            </Button>
          )}

          <Status
            id={id}
            status={status}
            vacancy_id={id}
            demand_id={demand?.id || demand_id}
          />
        </article>
      </li>

      <ConfirmModal
        ref={confirmRemoveModalRef}
        onConfirmClick={onConfirmDeleteVacancyClick}
        onCancelClick={onCancelConfirmDeleteVacancyClick}
        content='Você tem certeza que deseja remover essa vaga e todas as candidaturas relacionadas?'
      />
    </>
  )
}
