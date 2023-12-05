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
    setLinks,
    activityAreas,
    onCreateClick,
    onAvatarChange,
    onActivityAreasChange
  } = useOptional()

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
          onDataUpdates={onAvatarChange}
        >
          <AvatarUpload fill={colors.secondary[500]} />
        </File>

        <div className='absolute -left-8 top-2'>
          <Select
            isMulti
            color='secondary'
            value={activityAreas}
            options={activityAreas}
            placeholder='Área de atuação'
            onChange={onActivityAreasChange}
          />
        </div>

        <LinksForm color='secondary' setLinks={setLinks} links={links} />

        <Button onClick={onCreateClick} color='secondary' className='w-full'>
          Conectar!
        </Button>
      </div>
    </FormLayout>
  )
}
