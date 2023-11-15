import { Building } from './Building'
import { Remote } from './Remote'

import { VacancyWorkMode } from 'common/types/routes/shared'

import { colors } from 'src/styles/custom/colors'

import { IClassNameProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

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
    {(work_mode === 'remote' || work_mode == 'hybrid') && (
      <Remote className={twMerge('h-4 w-4', tws?.icons)} fill={fill} />
    )}

    {(work_mode === 'in_person' || work_mode == 'hybrid') && (
      <Building className={twMerge('h-4 w-4', tws?.icons)} fill={fill} />
    )}
  </div>
)
