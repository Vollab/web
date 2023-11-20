import { colors } from 'src/styles/custom/colors'

import { DemandStatus } from 'types-vollab/dist/shared/demand'
import { EnrollmentStatus } from 'types-vollab/dist/shared/enrollment'
import { Role } from 'types-vollab/dist/shared/role'
import { VacancyWorkMode } from 'types-vollab/dist/shared/vacancy'

interface IInfo {
  label: string
  color: string
}

interface IInfos {
  roles: Record<Role, IInfo>
  demandStatus: Record<DemandStatus, IInfo>
  vacancyWorkMode: Record<VacancyWorkMode, IInfo>
  enrollmentStatus: Record<EnrollmentStatus, IInfo>
}

export const infos: IInfos = {
  demandStatus: {
    OPEN: { label: 'Em aberto', color: colors.success[500] },
    CANCELED: { label: 'Cancelada', color: colors.error[500] },
    COMPLETED: { label: 'Concluída', color: colors.success[900] },
    IN_PROGRESS: { label: 'Em aberto', color: colors.warning[500] }
  },
  vacancyWorkMode: {
    HYBRID: { label: 'Hibrido', color: colors.warning[500] },
    REMOTE: { label: 'Remoto', color: colors.success[500] },
    IN_PERSON: { label: 'Presencial', color: colors.error[500] }
  },
  roles: {
    orderer: { label: 'Solicitante', color: colors.tertiary[500] },
    candidate: { label: 'Candidato', color: colors.secondary[500] }
  },
  enrollmentStatus: {
    APPROVED: { label: 'Aprovado', color: colors.success[500] },
    REFUSED: { label: 'Recusado', color: colors.error[500] },
    PENDING: { label: 'Pendente', color: colors.warning[500] },

    ACCEPTED: { label: 'Aceito pelo candidato', color: colors.success[500] },
    WAIVER: { label: 'Cancelado pelo candidato', color: colors.error[500] }
  }
}
