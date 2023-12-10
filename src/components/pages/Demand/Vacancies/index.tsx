'use client'

import { InfoItem } from '../InfoItem'
import { CreateVacancy } from './CreateVacancy'
import { FilledVacancy } from './FilledVacancy'
import { OpenVacancy } from './OpenVacancy'

import { useRef } from 'react'

import { Modal } from 'src/components/shared/molecules/Modal'
import { IForwardModal } from 'src/components/shared/molecules/Modal/types'

import { useDemandContext } from 'src/contexts/Demand'

export const Vacancies = () => {
  const { vacancies } = useDemandContext()
  const addVacancyModalRef = useRef<IForwardModal>(null)

  const onAddVacancyClick = () => {
    addVacancyModalRef.current?.triggerModal({ open: true })
  }

  const onCloseModal = () => {
    addVacancyModalRef.current?.triggerModal({ open: false })
  }

  return (
    <>
      <InfoItem title='Vagas' onAddClick={onAddVacancyClick}>
        <ul className='flex flex-col gap-4 py-4'>
          {vacancies?.map(({ id, open, name, work_mode, ...vacancy }) =>
            open ? (
              <OpenVacancy
                key={id}
                vacancy={{ id, open, name, work_mode, ...vacancy }}
              />
            ) : (
              <FilledVacancy key={id} name={name} work_mode={work_mode} />
            )
          )}
        </ul>
      </InfoItem>

      <Modal ref={addVacancyModalRef}>
        <CreateVacancy closeModal={onCloseModal} />
      </Modal>
    </>
  )
}
