/* eslint-disable @next/next/no-img-element */
import { FormLayout } from '../../FormLayout'
import { useOptional } from './useOptional'

import { colors } from 'src/styles/custom/colors'

import { AvatarUpload } from 'src/components/shared/atoms/AvatarUpload'
import { Button } from 'src/components/shared/groups/Buttons/Button'
import { File } from 'src/components/shared/groups/Form/File'
import { Select } from 'src/components/shared/groups/Form/Select'
import { LinksForm } from 'src/components/shared/molecules/LinksForm'

export const Optional = () => {
  const {
    links,
    avatar,
    setLinks,
    activityAreas,
    onCreateClick,
    onAvatarChange,
    activityOptions,
    onActivityAreasChange
  } = useOptional()

  return (
    <FormLayout
      role='Candidato'
      title='Informações opcionais'
      content='Ter uma foto de perfil e incluir alguns links é altamente recomendado para aprimorar a sua presença online!'
    >
      <div className='space-y-4 pt-6 flex flex-col items-center justify-center'>
        <File name='avatar' className='relative' onDataUpdates={onAvatarChange}>
          <AvatarUpload fill={colors.secondary[500]} avatar={avatar} />
        </File>

        <Select
          isMulti
          color='secondary'
          value={activityAreas}
          placeholder='Área de atuação'
          options={activityOptions || []}
          onChange={onActivityAreasChange}
          className='w-full'
        />

        <LinksForm
          color='secondary'
          setLinks={setLinks}
          links={links}
          className='hidden md:block '
        />

        <Button onClick={onCreateClick} color='secondary' className='w-full'>
          Conectar!
        </Button>
      </div>
    </FormLayout>
  )
}
