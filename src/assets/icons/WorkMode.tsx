import { Building } from './Building'
import { Remote } from './Remote'

import { colors } from 'src/styles/custom/colors'

import { IClassNameProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'
import { VacancyWorkMode } from 'types-vollab/dist/src/shared/vacancy'

interface IWorkModeProps extends IClassNameProps {
  fill?: string
  tws?: { icons?: string }
  work_mode?: VacancyWorkMode
}

export const WorkMode = ({
  tws,
  work_mode,
  className,
  fill = colors.primary[500]
}: IWorkModeProps) => (
  <div className={twMerge('flex gap-1', className)}>
    {(work_mode === 'REMOTE' || work_mode == 'HYBRID') && (
      <Remote className={twMerge('h-4 w-4', tws?.icons)} fill={fill} />
    )}

    {(work_mode === 'IN_PERSON' || work_mode == 'HYBRID') && (
      <Building className={twMerge('h-4 w-4', tws?.icons)} fill={fill} />
    )}
  </div>
)
