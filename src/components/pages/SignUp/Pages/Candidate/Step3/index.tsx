/* eslint-disable @next/next/no-img-element */
import { FormLayout } from '../../FormLayout'

import { useContext, useEffect, useRef, useState } from 'react'

import { colors } from 'src/styles/custom/colors'

import { AvatarUpload } from 'src/components/shared/atoms/AvatarUpload'
import { Button } from 'src/components/shared/groups/Buttons/Button'
import { File } from 'src/components/shared/groups/Form/File'
import { LinksForm } from 'src/components/shared/molecules/LinksForm'
import { IForwardToast, Toast } from 'src/components/shared/molecules/Toast'

import { useCandidateSignUp } from 'src/hooks/api/useCandidateSignUp'

import { CandidateContext } from '..'
import { Link } from 'types-vollab/dist/shared/link'

export const Step3 = () => {
  const toastRef = useRef<IForwardToast>(null)
  const [links, setLinks] = useState<Link[]>([])
  const [avatar, setAvatar] = useState<string>()
  const { candidateData } = useContext(CandidateContext)
  const { mutateAsync, isError, error } = useCandidateSignUp()

  const onCreateClick = async () => {
    await mutateAsync({
      name: candidateData.name,
      phone: candidateData.phone,
      email: candidateData.email,
      password: candidateData.password,
      biography: candidateData.biography
    })
  }

  useEffect(() => {
    isError &&
      toastRef.current?.triggerToast({
        variant: 'error',
        content: error.message
      })

    console.log(error)
  }, [isError, error])

  return (
    <>
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

      <Toast ref={toastRef} />
    </>
  )
}
