import { Status } from './Status'

import { useRef } from 'react'

import { useDeleteVacancy } from 'src/api/requests/demands/vacancies/delete/useDeleteVacancy'

import { CloseButton } from 'src/components/shared/groups/Buttons/CloseButton'
import { ConfirmModal } from 'src/components/shared/groups/Modals/ConfirmModal'
import { IForwardModal } from 'src/components/shared/molecules/Modal/types'

import { useDemandContext } from 'src/contexts/Demand'
import { queryClient } from 'src/contexts/ReactQuery'
import { useToastContext } from 'src/contexts/Toast'

import { infos } from 'src/static/infos'

import { TVacancy } from 'src/utils/addStatusInVacancies'

interface IOpenVacancyProps {
  vacancy: TVacancy
}

export const OpenVacancy = ({
  vacancy: { id, name, city, state, work_mode, description, status }
}: IOpenVacancyProps) => {
  const { toastRef } = useToastContext()
  const { mutateAsync } = useDeleteVacancy()
  const { isOwner, demand } = useDemandContext()
  const confirmRemoveModalRef = useRef<IForwardModal>(null)

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

  return (
    <>
      <li>
        <article className='flex flex-col gap-1 rounded-2xl shadow-lg  overflow-hidden group'>
          <header className='flex items-center justify-between p-4 pb-0 gap-x-4'>
            <div className='flex items-center justify-center gap-x-2'>
              {isOwner && (
                <CloseButton
                  className='hidden group-hover:flex'
                  onClick={() =>
                    confirmRemoveModalRef.current?.triggerModal({ open: true })
                  }
                />
              )}

              <h4 className='text-xl font-medium text-primary-500'>{name}</h4>
            </div>

            <span
              className='font-medium'
              style={{ color: infos.vacancyWorkMode[work_mode].color }}
            >
              {infos.vacancyWorkMode[work_mode].label}
            </span>
          </header>

          {work_mode !== 'REMOTE' && (
            <span className='font-medium text-gray-500 px-4'>
              {state}, {city}
            </span>
          )}

          <p className='px-4 text-gray-500 mt-1'>{description}</p>

          <Status id={id} status={status} />
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
