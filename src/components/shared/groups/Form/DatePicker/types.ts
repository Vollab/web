import { IChildrenProps } from 'src/types/react.types'

import { DateValueType } from 'react-tailwindcss-datepicker'

export interface IDatePickerValue {
  endDate: string
  startDate: string
}

export interface IDatePickerProps extends IChildrenProps {
  name: string
  inputTw?: string
  minDate?: string
  maxDate?: string
  asSingle?: boolean
  value: IDatePickerValue
  onChange: (
    value: DateValueType,
    e?: HTMLInputElement | null | undefined
  ) => void
}
