import { ISelectProps } from './types'

import { colors } from 'src/styles/custom/colors'

import { ClassNamesConfig } from 'react-select'

export const useSelect = () => {
  const styles: ISelectProps['styles'] = {
    control: base => ({
      ...base
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
      const tw = 'font-normal text-xs shadow-none border'
      return tw
    },

    singleValue: () => {
      const tw = 'py-2 font-medium text-md'
      return tw
    },

    placeholder: () => {
      const tw = 'py-2 text-md text-gray-100'
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

  return { styles, classNames }
}
