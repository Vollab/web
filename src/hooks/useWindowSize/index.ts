import { IUseWindowSizeParams, IWindowSize } from './types'

import { useEffect, useState } from 'react'

import { debounce as debounceUtil } from 'src/utils/debounce'

const getDimensions = () => ({
  height: globalThis.innerHeight,
  width: globalThis.innerWidth
})

export const useWindowSize = ({
  debounce = 1000
}: IUseWindowSizeParams): IWindowSize => {
  const [dimensions, setDimensions] = useState<IWindowSize | boolean>(false)

  useEffect(() => {
    const resize = () => {
      setDimensions(prev => {
        const newDimensions = getDimensions()
        return prev === newDimensions ? prev : newDimensions
      })
    }

    const debouncedResize = debounceUtil(resize, debounce)

    if (!dimensions) resize()

    globalThis.addEventListener('resize', debouncedResize)

    return () => globalThis.removeEventListener('resize', debouncedResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions])

  useEffect(() => {
    setDimensions({
      height: globalThis.innerHeight,
      width: globalThis.innerWidth
    })
  }, [])

  if (typeof dimensions === 'boolean')
    return { height: globalThis.innerHeight, width: globalThis.innerWidth }

  return dimensions
}
