'use client'

import { InfoItem } from '../InfoItem'
import { CreateVacancy } from './CreateVacancy'

import { useRef } from 'react'

import { Modal } from 'src/components/shared/molecules/Modal'
import { IForwardModal } from 'src/components/shared/molecules/Modal/types'
import { Vacancies as VacanciesList } from 'src/components/shared/organisms/Vacancies'

import { useDemandContext } from 'src/contexts/Demand'

export const Vacancies = () => {
  const { vacancies, isOwner } = useDemandContext()
  const addVacancyModalRef = useRef<IForwardModal>(null)

  const onAddVacancyClick = () => {
    addVacancyModalRef.current?.triggerModal({ open: true })
  }

  const onCloseModal = () => {
    addVacancyModalRef.current?.triggerModal({ open: false })
  }

  return (
    <>
      <InfoItem
        title='Vagas'
        onAddClick={isOwner ? onAddVacancyClick : undefined}
      >
        <ul className='flex flex-col gap-4 pt-4'>
          <VacanciesList vacancies={vacancies} />
        </ul>
      </InfoItem>

      <Modal ref={addVacancyModalRef}>
        <CreateVacancy closeModal={onCloseModal} />
      </Modal>
    </>
  )
}
