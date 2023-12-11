import { IFileModalProps } from './types'

import { Cropper } from './Cropper'
import { Footer } from './Footer'
import { Header } from './Header'

import { forwardRef } from 'react'

import { Modal } from 'src/components/shared/molecules/Modal'
import { IForwardModal } from 'src/components/shared/molecules/Modal/types'

export const FileModal = forwardRef<IForwardModal, IFileModalProps>(
  (
    { closeModal, cropper, setCropper, src, onConfirmClick, onReloadClick },
    ref
  ) => (
    <Modal ref={ref} className=''>
      <div className='w-[430px] h-[430px] flex flex-col bg-gray-50 rounded-lg overflow-hidden'>
        <Header closeModal={closeModal} onReloadClick={onReloadClick} />

        <Cropper src={src} cropper={cropper} setCropper={setCropper} />

        <Footer onConfirmClick={onConfirmClick} />
      </div>
    </Modal>
  )
)

FileModal.displayName = 'FileModal'
