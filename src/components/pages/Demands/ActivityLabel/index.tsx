import { colors } from 'src/styles/custom/colors'

import { WorkMode } from 'src/assets/icons/WorkMode'

import { TVacancyWorkMode } from 'src/types/shared.types'

interface IActivityLabelProps {
  name: string
  quantity?: number
  workMode?: TVacancyWorkMode
}

export const ActivityLabel = ({
  name,
  workMode,
  quantity
}: IActivityLabelProps) => (
  <div className='bg-primary-500 w-auto flex items-center justify-center p-2 rounded-full gap-1'>
    <span className='text-gray-50 text-sm font-medium px-1'>
      {name} {quantity && quantity > 1 ? `(${quantity})` : ''}
    </span>

    <WorkMode workMode={workMode} fill={colors.gray[50]} />
  </div>
)
