/* eslint-disable @next/next/no-img-element */
import { FormLayout } from '../../FormLayout'

import { useCallback, useContext, useEffect, useState } from 'react'

import { colors } from 'src/styles/custom/colors'

import { AvatarUpload } from 'src/components/shared/atoms/AvatarUpload'
import { Button } from 'src/components/shared/groups/Buttons/Button'
import { File } from 'src/components/shared/groups/Form/File'
import { ILink, LinksForm } from 'src/components/shared/molecules/LinksForm'

import { useCandidateSignUp } from 'src/hooks/api/useCandidateSignUp'

import { CandidateContext } from '..'

export const Step3 = () => {
  const { mutateAsync } = useCandidateSignUp()
  const [avatar, setAvatar] = useState<string>()
  const [links, setLinks] = useState<ILink[]>([])
  const { candidateData } = useContext(CandidateContext)

  const createUser = useCallback(async () => {
    try {
      await mutateAsync({
        name: 'test',
        phone: 'test',
        email: 'test',
        password: 'test',
        biography: 'test'
      })
    } catch (error) {}
  }, [mutateAsync])

  useEffect(() => {
    createUser()
  }, [candidateData, createUser])

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
          className='relative'
          onDataUpdates={data => setAvatar(data)}
        >
          <AvatarUpload avatar={avatar} fill={colors.secondary[500]} />
        </File>

        <LinksForm links={links} setLinks={setLinks} color='secondary' />

        <Button color='secondary' className='w-full'>
          Próximo passo
        </Button>
      </div>
    </FormLayout>
  )
}
