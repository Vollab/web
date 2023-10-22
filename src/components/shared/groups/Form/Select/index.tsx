import { ISelectProps } from './types'

import { useSelect } from './useSelect'

import OriginalSelect from 'react-select'

export const Select = ({ className, ...props }: ISelectProps) => {
  const { classNames, styles } = useSelect()

  return (
    <div className={className}>
      <OriginalSelect {...props} styles={styles} classNames={classNames} />
    </div>
  )
}
