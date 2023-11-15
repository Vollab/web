import { IFileProps } from './types'

import { useFile } from './useFile'

import React from 'react'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Modal } from 'src/components/shared/molecules/Modal'

import 'cropperjs/dist/cropper.css'
import { Cropper } from 'react-cropper'

export const File = ({
  name,
  accept,
  children,
  className,
  onDataUpdates,
  maxSize = '2048',
  noCropper = false,
  ...props
}: IFileProps) => {
  const { file, fileRef, modalRef, onChange, setCropper, getCropData } =
    useFile({ onDataUpdates })

  return (
    <>
      <label className={className} htmlFor={name}>
        {children}

        <input
          id={name}
          type='file'
          name={name}
          ref={fileRef}
          data-cy='File'
          accept={accept}
          onChange={onChange}
          data-max-size={maxSize}
          style={{ display: 'none' }}
          onClick={() => modalRef.current?.triggerModal({ open: true })}
        />
      </label>

      {!noCropper && (
        <Modal ref={modalRef}>
          <div className='w-[80vw] mx-auto flex flex-col items-center space-y-4 pb-4'>
            <Cropper
              center
              src={file}
              viewMode={2}
              guides={false}
              dragMode='move'
              aspectRatio={1}
              background={false}
              className='Cropper'
              minCropBoxWidth={80}
              minCropBoxHeight={80}
              checkOrientation={false}
              onInitialized={instance => setCropper(instance)}
              {...props}
            />

            <div className='space-x-4 flex'>
              <Button
                color='success'
                type='button'
                onClick={() => {
                  getCropData()
                  modalRef.current?.triggerModal({ open: false })
                }}
              >
                Selecionar
              </Button>

              <Button
                color='error'
                type='button'
                onClick={() => {
                  getCropData()
                  modalRef.current?.triggerModal({ open: false })
                }}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
