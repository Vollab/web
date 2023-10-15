import { ISelectProps } from './types'

import * as React from 'react'

import { colors } from 'src/styles/custom/colors'

import OriginalSelect, { ClassNamesConfig } from 'react-select'

export const Select = ({ className, ...props }: ISelectProps) => {
  const styles: ISelectProps['styles'] = {
    control: base => ({
      ...base,
      borderWidth: 0,
      outlineWidth: 2,
      outlineOffset: 2,
      outlineStyle: 'solid'
    }),
    option: (base, { isSelected }) => ({
      ...base,
      color: isSelected ? colors.gray[50] : undefined,
      backgroundColor: isSelected ? colors.secondary[500] : undefined
    }),
    singleValue: base => ({ ...base, color: colors.primary[500] })
  }

  const classNames: ClassNamesConfig = {
    indicatorSeparator: () => 'hidden',

    valueContainer: () => {
      const tw = 'ellipsis pr-0 overflow-hidden'
      return tw
    },

    control: () => {
      const tw = 'font-normal text-xs shadow-none rounded-lg'
      return tw
    },

    singleValue: () => {
      const tw = 'py-2 text-smToMd font-medium'
      return tw
    },

    placeholder: () => {
      const tw = 'py-2 text-smToMd'
      return tw
    },

    option: () => {
      const tw = `
        text-gray-600 bg-gray-50
        hover:text-gray-50 hover:bg-primary-500
      `
      return tw
    }
  }

  return (
    <div className={className}>
      <OriginalSelect {...props} styles={styles} classNames={classNames} />
    </div>
  )
}
