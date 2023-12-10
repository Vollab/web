import { ISelectProps, IUseSelectParams } from './types'

import { colors } from 'src/styles/custom/colors'
import radius from 'src/styles/custom/radius'
import sizes from 'src/styles/custom/sizes'

export const useSelect = ({ color }: IUseSelectParams) => {
  const styles: ISelectProps['styles'] = {
    singleValue: base => ({ ...base, color: colors[color][500] }),

    valueContainer: base => ({
      ...base,
      padding: 0,
      paddingLeft: sizes[3],
      paddingRight: sizes[3]
    }),

    control: base => ({
      ...base,
      border: 0,
      boxShadow: 'none',
      cursor: 'pointer',
      paddingTop: 6,
      paddingBottom: 6,
      backgroundColor: 'transparent'
    }),

    option: (base, { isSelected }) => ({
      ...base,
      cursor: 'pointer',
      color: isSelected ? colors.gray[50] : undefined,
      backgroundColor: isSelected ? colors[color][500] : undefined,

      ':hover': {
        color: colors.gray['50'],
        backgroundColor: colors[color][200]
      }
    }),

    multiValueRemove: base => ({
      ...base,
      color: colors[color][500],
      svg: { fill: colors.gray[50] },
      ':hover': { backgroundColor: 'transparent' }
    }),

    multiValue: base => ({
      ...base,
      padding: sizes[1],
      borderRadius: radius.lg,
      backgroundColor: colors[color][500]
    }),

    multiValueLabel: base => ({
      ...base,
      color: colors.gray[50]
    }),

    menuList: base => ({
      ...base,
      maxHeight: 200
    }),

    placeholder: base => ({ ...base, color: colors.gray[300] })
  }

  return { styles }
}
