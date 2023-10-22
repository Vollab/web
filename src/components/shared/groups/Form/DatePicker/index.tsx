import { IDatePickerProps } from './types'

import { useDatePicker } from './useDatePicker'

import React from 'react'

import OriginalDatePicker from 'react-tailwindcss-datepicker'

export const DatePicker = ({
  name,
  value,
  inputTw,
  minDate,
  maxDate,
  onChange,
  className,
  asSingle = false
}: IDatePickerProps) => {
  const { inputClassName, toggleClassName } = useDatePicker(inputTw)

  return (
    <span
      className={`relative flex items-center ${className}`}
      id={name + 'DatePicker'}
    >
      {!inputTw && (
        <label
          htmlFor={name}
          className='absolute h-10 w-full flex items-center bg-gray-50 rounded-md'
        />
      )}

      <OriginalDatePicker
        i18n='pt'
        value={value}
        inputId={name}
        separator={'-'}
        asSingle={asSingle}
        onChange={onChange}
        primaryColor='violet'
        useRange={!asSingle}
        popoverDirection='down'
        displayFormat={'DD/MM/YYYY'}
        inputClassName={inputClassName}
        containerClassName={'datepicker'}
        toggleClassName={toggleClassName}
        minDate={minDate ? new Date(minDate) : undefined}
        maxDate={maxDate ? new Date(maxDate) : undefined}
      />
    </span>
  )
}
