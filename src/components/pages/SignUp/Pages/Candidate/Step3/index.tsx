/* eslint-disable @next/next/no-img-element */
import { FormLayout } from '../../FormLayout'

import { useRouter } from 'next/navigation'

import { useCallback, useContext, useEffect, useState } from 'react'

import { colors } from 'src/styles/custom/colors'

import { AvatarUpload } from 'src/components/shared/atoms/AvatarUpload'
import { Button } from 'src/components/shared/groups/Buttons/Button'
import { File } from 'src/components/shared/groups/Form/File'
import { LinksForm } from 'src/components/shared/molecules/LinksForm'
import { IInfo } from 'src/components/shared/molecules/Toast'

import { useCandidateSignUp } from 'src/hooks/api/useCandidateSignUp'

import { transformToArray } from 'src/utils/transformToArray'

import { CandidateContext } from '..'
import { Link } from 'types-vollab/dist/shared/link'

export const Step3 = () => {
  const { push } = useRouter()
  const [links, setLinks] = useState<Link[]>([])
  const [avatar, setAvatar] = useState<string>()
  const { candidateData, setStep, toastRef } = useContext(CandidateContext)
  const { mutateAsync, isError, error, isSuccess } = useCandidateSignUp()

  const onCreateClick = async () => {
    await mutateAsync({
      name: candidateData.name,
      phone: candidateData.phone,
      email: candidateData.email,
      password: candidateData.password,
      biography: candidateData.biography
    })
  }

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

  return (
    <FormLayout
      role='Candidato'
      title='Informações opcionais'
      content='É sempre bom ter uma foto de perfil e alguns links para melhorar o seu perfil!'
    >
      <div className='space-y-4 pt-6 flex flex-col items-center justify-center'>
        <File
          name='avatar'
          label='Avatar'
          onDataUpdates={data => setAvatar(data)}
          className='relative'
        >
          <AvatarUpload avatar={avatar} fill={colors.secondary[500]} />
        </File>

        <LinksForm links={links} setLinks={setLinks} color='secondary' />

        <Button onClick={onCreateClick} color='secondary' className='w-full'>
          Criar conta
        </Button>
      </div>
    </FormLayout>
  )
}
