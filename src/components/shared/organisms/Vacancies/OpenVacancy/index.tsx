import { ActivityLabel } from '../../Demand/ActivityLabel'
import { Applications } from './Applications'
import { Description } from './Description'
import { Header } from './Header'
import { Location } from './Location'
import { Status } from './Status'
import { useOpenVacancy } from './useOpenVacancy'

import { ConfirmModal } from 'src/components/shared/groups/Modals/ConfirmModal'

export const OpenVacancy = () => {
  const {
    workMode,
    activityArea,
    onDeleteClick,
    confirmRemoveModalRef,
    onConfirmDeleteVacancyClick,
    onCancelConfirmDeleteVacancyClick
  } = useOpenVacancy()

  return (
    <>
      <li>
        <article className='flex flex-col gap-1 rounded-2xl shadow-md overflow-hidden group h-full bg-gray-50'>
          <Header onDeleteClick={onDeleteClick} />
          <Location />
          <Description />

          <div className='flex items-center justify-between px-4 py-2'>
            <ActivityLabel name={activityArea as any} work_mode={workMode} />

            <Applications />
          </div>

          <Status />
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
