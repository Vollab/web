'use client'

import { Form } from './Form'

import { useRef } from 'react'

import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'

import { AddButton } from 'src/components/shared/groups/Buttons/AddButton'
import { Modal } from 'src/components/shared/molecules/Modal'
import { IForwardModal } from 'src/components/shared/molecules/Modal/types'

export const AddDemand = () => {
  const { data } = useCurrentUser()
  const modalRef = useRef<IForwardModal>(null)

  const closeModal = () => {
    modalRef.current?.triggerModal({ open: false })
  }

  const openModal = () => {
    modalRef.current?.triggerModal({ open: true })
  }

  return (
    <>
      {data?.user.role === 'orderer' && <AddButton onClick={openModal} />}

      <Modal ref={modalRef}>
        <Form closeModal={closeModal} />
      </Modal>
    </>
  )
}
