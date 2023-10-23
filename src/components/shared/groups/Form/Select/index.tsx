import { ISelectProps } from './types'

import { useSelect } from './useSelect'

import OriginalSelect from 'react-select'
import { twMerge } from 'tailwind-merge'

export const Select = ({
  className,
  color = 'primary',
  ...props
}: ISelectProps) => {
  const { styles } = useSelect({ color })

  return (
    <div className={twMerge('border rounded-xl', className)}>
      <OriginalSelect
        styles={styles}
        noOptionsMessage={() => 'Sem opções'}
        {...props}
      />
    </div>
  )
}
