import { useRouter } from 'next/navigation'

import { useCallback, useEffect } from 'react'

import { IInfo } from 'src/components/shared/molecules/Toast'

import { useStepsContext } from 'src/contexts/SignUp/Steps'
import { useToastContext } from 'src/contexts/Toast'

import { transformToArray } from 'src/utils/transformToArray'

interface IUseSubmitActionsParams {
  error: any
  isError: boolean
  isSuccess: boolean
}

export const useSubmitActions = ({
  error,
  isError,
  isSuccess
}: IUseSubmitActionsParams) => {
  const { push } = useRouter()
  const { setStep } = useStepsContext()
  const { toastRef } = useToastContext()

  const onError = useCallback(() => {
    const errors: { message: string }[] = transformToArray(error)
    const infos: IInfo[] = []
    let newStep

    errors.forEach(error => {
      switch (error.message) {
        case 'Phone already in use': {
          infos.push({
            variant: 'error',
            content: 'Número de celular já está sendo utilizado!'
          })

          newStep = 1
          break
        }

        case 'E-mail already in use': {
          infos.push({
            variant: 'error',
            content: 'E-mail já está sendo utilizado!'
          })

          newStep = 1
          break
        }

        default:
          infos.push({ content: error.message, variant: 'error' })
          break
      }
    })

    toastRef?.current?.triggerToast(infos)

    if (newStep) setStep(newStep)
  }, [error, setStep, toastRef])

  const onSuccess = useCallback(() => {
    toastRef?.current?.triggerToast([
      { content: 'Cadastrado com sucesso!', variant: 'success' }
    ])

    push('/demands')
  }, [push, toastRef])

  useEffect(() => {
    isError && onError()
  }, [isError, onError])

  useEffect(() => {
    isSuccess && onSuccess()
  }, [isSuccess, onSuccess])
}
