import {
  ApplicationStatus,
  DemandStatus,
  Role,
  VacancyWorkMode
} from 'common/types/routes/shared'

import { colors } from 'src/styles/custom/colors'

interface IInfo {
  label: string
  color: string
}

export const demandStatusInfo: Record<DemandStatus, IInfo> = {
  opened: { label: 'Em aberto', color: colors.success[500] },
  canceled: { label: 'Cancelada', color: colors.error[500] },
  completed: { label: 'Concluída', color: colors.success[900] },
  in_progress: { label: 'Em aberto', color: colors.warning[500] }
}

export const vacancyWorkModeInfo: Record<VacancyWorkMode, IInfo> = {
  hybrid: { label: 'Hibrido', color: colors.warning[500] },
  remote: { label: 'Remoto', color: colors.success[500] },
  in_person: { label: 'Presencial', color: colors.error[500] }
}

export const applicationStatusInfo: Record<ApplicationStatus, IInfo> = {
  approved: { label: 'Aprovado', color: colors.success[500] },
  pending: { label: 'Pendente', color: colors.warning[500] },
  refused: { label: 'Recusado', color: colors.error[500] }
}

export const rolesInfo: Record<Role, IInfo> = {
  orderer: { label: 'Solicitante', color: colors.tertiary[500] },
  candidate: { label: 'Candidato', color: colors.secondary[500] }
}
