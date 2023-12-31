import { ISelectProps } from './types'

import { useSelect } from './useSelect'

import OriginalSelect from 'react-select'
import { twMerge } from 'tailwind-merge'

export const Select = ({
  className,
  onChange,
  color = 'primary',
  placeholder = 'Selecionar...',
  ...props
}: ISelectProps) => {
  const { styles } = useSelect({ color })

  return (
    <div className={twMerge('border rounded-xl', className)}>
      <OriginalSelect
        styles={styles}
        placeholder={placeholder}
        onChange={onChange as any}
        noOptionsMessage={() => 'Sem opções'}
        {...props}
      />
    </div>
  )
}
