/* eslint-disable @next/next/no-img-element */
import { FormLayout } from '../../FormLayout'
import { useOptional } from './useOptional'

import { colors } from 'src/styles/custom/colors'

import { AvatarUpload } from 'src/components/shared/atoms/AvatarUpload'
import { Button } from 'src/components/shared/groups/Buttons/Button'
import { File } from 'src/components/shared/groups/Form/File'
import { LinksForm } from 'src/components/shared/molecules/LinksForm'

export const Optional = () => {
  const {
    links,
    avatar,
    setLinks,

    onCreateClick,
    onAvatarChange
  } = useOptional()

  return (
    <FormLayout
      color='tertiary'
      role='Solicitante'
      title='Informações opcionais'
      content='Ter uma foto de perfil e incluir alguns links é altamente recomendado para aprimorar a sua presença online!'
    >
      <div className='space-y-4 pt-6 flex flex-col items-center justify-center'>
        <File name='avatar' className='relative' onDataUpdates={onAvatarChange}>
          <AvatarUpload fill={colors.tertiary[500]} avatar={avatar} />
        </File>

        <LinksForm
          color='tertiary'
          setLinks={setLinks}
          links={links}
          className=''
        />

        <Button onClick={onCreateClick} color='tertiary' className='w-full'>
          Conectar!
        </Button>
      </div>
    </FormLayout>
  )
}
