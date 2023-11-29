import { FormLayout } from '../../FormLayout'
import { useAbout } from './useAbout'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Field } from 'src/components/shared/groups/Form/Field'
import { Textarea } from 'src/components/shared/groups/Form/Textarea'

export const About = () => {
  const { formState, handleSubmit, onSubmit, register, onBiographyChange } =
    useAbout()

  return (
    <FormLayout
      color='tertiary'
      role='Solicitante'
      title='Sobre você'
      content='Escreva um pouco sobre você!'
    >
      <form className='space-y-4 pt-6' onSubmit={handleSubmit(onSubmit)}>
        <Field
          color='tertiary'
          {...register('name')}
          placeholder='Nome Completo'
          error={formState.errors.name}
          tws={{ input: 'text-secondary-500' }}
        />

        <Textarea
          placeholder='Biografia'
          onChange={onBiographyChange}
          className='text-tertiary-500'
          ref={register('biography').ref}
          error={formState.errors.biography as any}
        />

        <Button className='w-full' type='submit' color='tertiary'>
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}
