import { useRouter } from 'next/navigation'

import { useEnrollment } from 'src/api/requests/enrollment/useEnrollment'
import { useUser } from 'src/api/requests/users/useUser'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { queryClient } from 'src/contexts/ReactQuery'
import { useToastContext } from 'src/contexts/Toast'

import { infos } from 'src/static/infos'

import { Avatar } from 'src/assets/icons'

import { EnrollmentStatus } from 'types-vollab/dist/src/shared/enrollment'

export interface IApplicantProps {
  demand_id: string
  vacancy_id: string
  candidate_id: string
  status: EnrollmentStatus
}

const limit = (str: string, limite: number) =>
  str.length <= limite ? str : str.slice(0, limite) + '...'

export const Applicant = ({
  status,
  demand_id,
  vacancy_id,
  candidate_id
}: IApplicantProps) => {
  const { push } = useRouter()
  const { toastRef } = useToastContext()
  const { data } = useUser({ id: candidate_id })
  const { mutateApprove, mutateRefuse } = useEnrollment()

  const onApproveClick = async () => {
    const { enrollment } = await mutateApprove({
      candidate_id,
      demand_id,
      vacancy_id
    })

    if (!enrollment) toastRef?.current?.triggerToast([{}])

    toastRef?.current?.triggerToast([
      { variant: 'success', content: 'Candidato aprovado!' }
    ])

    queryClient.refetchQueries('applicants')
  }

  const onRejectClick = async () => {
    const { enrollment } = await mutateRefuse({
      candidate_id,
      demand_id,
      vacancy_id
    })

    if (!enrollment) toastRef?.current?.triggerToast([{}])

    toastRef?.current?.triggerToast([
      { variant: 'success', content: 'Candidato recusado!' }
    ])

    queryClient.refetchQueries('applicants')
  }

  return (
    <article className='p-4 flex flex-col gap-y-4 shadow-sm rounded-xl bg-gray-50'>
      <Button
        className='flex flex-col text-left gap-y-2'
        onClick={() => push(`/users/${candidate_id}`)}
      >
        <div className='flex gap-x-4'>
          <Avatar
            fill={colors.secondary[500]}
            className='h-12 w-12 row-span-2'
          />

          <p className='flex flex-col justify-center flex-1 overflow-visible'>
            <div className='text-lg'>{data?.user.name.split(' ')[0]}</div>

            <span className='text-gray-500  ellipsis overflow-visible text-md leading-[18px]'>
              {data?.user.email}
            </span>
          </p>
        </div>

        <span style={{ color: infos.enrollmentStatus[status].color }}>
          {infos.enrollmentStatus[status].label}
          {status === 'APPROVED' && (
            <>
              :{' '}
              <b className='text-gray-500 font-medium'>
                Aguarde a confirmação do candidato!
              </b>
            </>
          )}
        </span>

        <p className='break-all max-h-[100px] text-gray-500'>
          {limit(data?.user.biography || '', 144)}
        </p>
      </Button>

      {status === 'PENDING' && (
        <footer className='flex items-center justify-center gap-x-4'>
          <Button
            color='error'
            onClick={onRejectClick}
            className='flex-1 h-8 rounded-xl'
          >
            Recusar
          </Button>

          <Button
            color='success'
            onClick={onApproveClick}
            className='flex-1 h-8 rounded-xl'
          >
            Aceitar
          </Button>
        </footer>
      )}
    </article>
  )
}
