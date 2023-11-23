/* eslint-disable @next/next/no-img-element */
import { FormLayout } from '../../FormLayout'
import { useOptional } from './useOptional'

import { colors } from 'src/styles/custom/colors'

import { AvatarUpload } from 'src/components/shared/atoms/AvatarUpload'
import { Button } from 'src/components/shared/groups/Buttons/Button'
import { File } from 'src/components/shared/groups/Form/File'
import { LinksForm } from 'src/components/shared/molecules/LinksForm'

export const Optional = () => {
  const { avatar, setAvatar, onCreateClick, links, setLinks } = useOptional()

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

        <Button onClick={onCreateClick} color='secondary' className='w-full'>
          Criar conta
        </Button>
      </div>
    </FormLayout>
  )
}
