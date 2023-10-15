'use client'

import { IDraggableSliderProps } from './types'

import { useDraggableSlider } from './useDraggableSlider'

import { motion } from 'framer-motion'

export const DraggableSlider = ({
  items,
  className,
  containerTw,
  marginRight = 0,
  responsiveWidthConstraints
}: IDraggableSliderProps) => {
  const { ulRef, constraints, onDrag } = useDraggableSlider({
    marginRight,
    responsiveWidthConstraints
  })

  return (
    <motion.div
      className={`
        max-w-[100vw] overflow-hidden
        ${containerTw}
      `}
    >
      <motion.ul
        drag='x'
        ref={ulRef}
        onDrag={onDrag}
        dragConstraints={constraints}
        className={`flex flex-nowrap ${className}`}
      >
        {items}
      </motion.ul>
    </motion.div>
  )
}
