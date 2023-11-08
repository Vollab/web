/* eslint-disable @next/next/no-img-element */
import { FormLayout } from '../../FormLayout'

import { useState } from 'react'

import { colors } from 'src/styles/custom/colors'

import { AvatarUpload } from 'src/components/shared/atoms/AvatarUpload'
import { Button } from 'src/components/shared/atoms/Button'
import { File } from 'src/components/shared/groups/Form/File'
import { ILink, LinksForm } from 'src/components/shared/molecules/LinksForm'

export const Step3 = () => {
  const [avatar, setAvatar] = useState<string>()
  const [links, setLinks] = useState<ILink[]>([])

  const onNextClick = () => {}

  return (
    <FormLayout
      color='tertiary'
      role='Solicitante'
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
          <AvatarUpload avatar={avatar} fill={colors.tertiary[500]} />
        </File>

        <LinksForm links={links} setLinks={setLinks} color='tertiary' />

        <Button color='tertiary' className='w-full' onClick={onNextClick}>
          Próximo passo
        </Button>
      </div>
    </FormLayout>
  )
}
