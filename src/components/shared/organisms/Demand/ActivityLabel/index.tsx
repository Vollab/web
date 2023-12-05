import { colors } from 'src/styles/custom/colors'

import { WorkMode } from 'src/assets/icons/WorkMode'

import { VacancyWorkMode } from 'types-vollab/dist/src/shared/vacancy'

interface IActivityLabelProps {
  name: string
  work_mode?: VacancyWorkMode
}

export const ActivityLabel = ({ name, work_mode }: IActivityLabelProps) => (
  <div className='bg-primary-500 w-auto flex items-center justify-center p-2 rounded-full gap-1'>
    <span className='text-gray-50 text-sm font-medium px-1'>{name}</span>

    <WorkMode work_mode={work_mode} fill={colors.gray[50]} />
  </div>
)
