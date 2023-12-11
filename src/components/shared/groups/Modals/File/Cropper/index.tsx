import { ICropperProps } from './types'

import { Button } from '../../../Buttons/Button'
import { useCropper } from './useCropper'

import { Minus } from 'src/assets/icons/Minus'
import { Plus } from 'src/assets/icons/Plus'

import { Cropper as ReactCropper } from 'react-cropper'

export const Cropper = ({ src, cropper, setCropper }: ICropperProps) => {
  const { onZoomIn, onZoomOut } = useCropper({ cropper })

  return (
    <div className='flex-1 relative h-[304px]'>
      <ReactCropper
        center
        src={src}
        viewMode={1}
        zoomTo={0.5}
        guides={false}
        aspectRatio={1}
        dragMode='move'
        background={true}
        initialAspectRatio={1}
        minCropBoxWidth={278}
        cropBoxMovable={false}
        minCropBoxHeight={278}
        className='FileCropper'
        cropBoxResizable={false}
        toggleDragModeOnDblclick={false}
        style={{ height: '100%', width: 430 }}
        onInitialized={instance => setCropper(instance)}
      />

      {src && (
        <div className='absolute top-1/2 -translate-y-1/2 right-[14px] rounded-[5px] w-[33px] h-[62px] bg-[#fff] flex flex-col z-10'>
          <Button
            onClick={onZoomIn}
            className='flex flex-1 items-center justify-center w-full'
          >
            <Plus className='h-[12px] w-[12px]' fill='#C8C8C8' />
          </Button>

          <Button
            onClick={onZoomOut}
            className='flex flex-1 items-center justify-center w-full'
          >
            <Minus className='h-[12px] w-[12px]' fill='#C8C8C8' />
          </Button>
        </div>
      )}
    </div>
  )
}
