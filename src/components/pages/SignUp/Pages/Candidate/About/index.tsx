import { FormLayout } from '../../FormLayout'
import { useAbout } from './useAbout'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Select } from 'src/components/shared/groups/Form'
import { LeftIcon } from 'src/components/shared/groups/Form/Field/LeftIcon'
import { Textarea } from 'src/components/shared/groups/Form/Textarea'

export const About = () => {
  const {
    onSubmit,
    register,
    formState,
    onNextClick,
    handleSubmit,
    activityAreas,
    onTextAreaChange,
    activityAreasOptions,
    showActivityAreaError,
    onActivityAreasChange
  } = useAbout()

  return (
    <FormLayout
      role='Candidato'
      title='Sobre você'
      content='Agora fale um pouco sobre você e selecione suas áreas de atuação!'
    >
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 pt-6'>
        <div className='relative'>
          <div className='absolute -left-8 top-2'>
            {showActivityAreaError && (
              <LeftIcon error={{ message: 'Selecione uma area de atuação!' }} />
            )}
          </div>

          <Select
            isMulti
            color='secondary'
            value={activityAreas}
            placeholder='Área de atuação'
            onChange={onActivityAreasChange}
            options={activityAreasOptions}
          />
        </div>

        <Textarea
          placeholder='Biografia'
          error={formState.errors.biography as any}
          ref={register('biography').ref}
          onChange={onTextAreaChange}
          className='text-secondary-500'
        />

        <Button
          type='submit'
          color='secondary'
          onClick={onNextClick}
          className='w-full'
        >
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}
