import { IUseDraggableSliderParams } from './types'

import { useCallback, useEffect, useRef, useState } from 'react'

import { useWindowSize } from 'src/hooks/useWindowSize'

export const useDraggableSlider = ({
  marginRight = 0
}: IUseDraggableSliderParams) => {
  const { width } = useWindowSize({})
  const ulRef = useRef<HTMLUListElement>(null)
  const [constraints, setConstraints] = useState({ left: 0, right: 0 })

  const updateConstraints = useCallback(() => {
    if (ulRef.current)
      setConstraints({
        right: 0,
        left: -(
          ulRef.current.scrollWidth -
          ulRef.current.clientWidth +
          marginRight
        )
      })
  }, [marginRight, ulRef])

  const onDrag = () => {}

  useEffect(() => {
    updateConstraints()
  }, [updateConstraints, ulRef, width])

  return { constraints, ulRef, onDrag, updateConstraints }
}
