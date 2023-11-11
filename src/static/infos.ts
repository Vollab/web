import { colors } from 'src/styles/custom/colors'

import {
  TApplicationStatus,
  TDemandStatus,
  TRole,
  TVacancyWorkMode
} from 'src/types/shared.types'

interface IInfo {
  label: string
  color: string
}

export const demandStatusInfo: Record<TDemandStatus, IInfo> = {
  opened: { label: 'Em aberto', color: colors.success[500] },
  canceled: { label: 'Cancelada', color: colors.error[500] },
  completed: { label: 'Concluída', color: colors.success[900] },
  in_progress: { label: 'Em aberto', color: colors.warning[500] }
}

export const vacancyWorkModeInfo: Record<TVacancyWorkMode, IInfo> = {
  hybrid: { label: 'Hibrido', color: colors.warning[500] },
  remote: { label: 'Remoto', color: colors.success[500] },
  in_person: { label: 'Presencial', color: colors.error[500] }
}

export const applicationStatusInfo: Record<TApplicationStatus, IInfo> = {
  approved: { label: 'Aprovado', color: colors.success[500] },
  pending: { label: 'Pendente', color: colors.warning[500] },
  refused: { label: 'Recusado', color: colors.error[500] }
}

export const rolesInfo: Record<TRole, IInfo> = {
  orderer: { label: 'Solicitante', color: colors.tertiary[500] },
  candidate: { label: 'Candidato', color: colors.secondary[500] }
}
