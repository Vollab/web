import { colors } from 'src/styles/custom/colors'

import { TDemandStatus, TVacancyWorkMode } from 'src/types/shared.types'

export const demandStatusInfo: Record<TDemandStatus, any> = {
  opened: {
    label: 'Em aberto',
    color: colors.success[500]
  },
  canceled: {
    label: 'Cancelada',
    color: colors.error[500]
  },
  completed: {
    label: 'Concluída',
    color: colors.success[900]
  },
  in_progress: {
    label: 'Em aberto',
    color: colors.warning[500]
  }
}

export const vacancyWorkModeInfo: Record<TVacancyWorkMode, any> = {
  hybrid: { label: 'Hibrido', color: colors.warning[500] },
  remote: { label: 'Remoto', color: colors.success[500] },
  in_person: { label: 'Presencial', color: colors.error[500] }
}
