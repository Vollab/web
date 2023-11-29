import { FormLayout } from '../../FormLayout'
import { usePersonal } from './usePersonal'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Field } from 'src/components/shared/groups/Form/Field'

import { formatPhone } from 'src/utils/format/phone'

export const Personal = () => {
  const { formState, handleSubmit, onSubmit, register, setValue } =
    usePersonal()

  return (
    <FormLayout
      role='Candidato'
      title='Informações pessoais'
      content='Adicione suas informações pessoais e de contato!'
    >
      <form className='space-y-4 pt-6' onSubmit={handleSubmit(onSubmit)}>
        <Field
          color='secondary'
          {...register('name')}
          placeholder='Nome Completo'
          error={formState.errors.name}
          tws={{ input: 'text-secondary-500' }}
        />

        <Field
          color='secondary'
          placeholder='Email'
          {...register('email')}
          error={formState.errors.email}
        />

        <Field
          color='secondary'
          placeholder='Celular'
          {...register('phone')}
          error={formState.errors.phone}
          maxLength={15}
          onChange={e => {
            setValue('phone', formatPhone(e.target.value))
          }}
        />

        <Field
          type='password'
          color='secondary'
          placeholder='Senha'
          {...register('password')}
          error={formState.errors.password}
        />

        <Button color='secondary' className='w-full' type='submit'>
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}
