import { TTimer } from 'src/types/react.types'

export const debounce = (
  functionToDebounce: (args: any) => void,
  timeout: number
) => {
  let timer: TTimer

  return (args: any) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      timer = undefined

      functionToDebounce(args)
    }, timeout)
  }
}
