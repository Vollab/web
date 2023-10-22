import { IDatePickerProps } from './types'

export const useDatePicker = (inputTw: IDatePickerProps['inputTw']) => {
  const tw = `
    text-smToMd_320x768 font-medium text-primary-500 w-inputDatePicker h-[20px] pl-3 outline-none bg-transparent -translate-y-[2px]
    placeholder:text-sm
  `

  const toggleTw = 'text-primary-500 translate-y-[2px] mr-[6px]'

  const inputClassName = inputTw ? 'border-none outline-none' : tw
  const toggleClassName = inputTw ? 'hidden' : toggleTw

  return { inputClassName, toggleClassName }
}
