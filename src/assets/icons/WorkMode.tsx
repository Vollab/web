import { Building } from './Building'
import { Remote } from './Remote'

import { colors } from 'src/styles/custom/colors'

import { IClassNameProps } from 'src/types/react.types'
import { TVacancyWorkMode } from 'src/types/shared.types'

import { twMerge } from 'tailwind-merge'

interface IWorkModeProps extends IClassNameProps {
  fill?: string
  tws?: { icons?: string }
  workMode?: TVacancyWorkMode
}

export const WorkMode = ({
  tws,
  workMode,
  className,
  fill = colors.primary[500]
}: IWorkModeProps) => (
  <div className={twMerge('flex gap-1', className)}>
    {(workMode === 'remote' || workMode == 'hybrid') && (
      <Remote className={twMerge('h-4 w-4', tws?.icons)} fill={fill} />
    )}

    {(workMode === 'in_person' || workMode == 'hybrid') && (
      <Building className={twMerge('h-4 w-4', tws?.icons)} fill={fill} />
    )}
  </div>
)
