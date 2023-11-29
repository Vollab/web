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
      color='tertiary'
      role='Solicitante'
      title='Informações pessoais'
      content='Adicione suas informações pessoais e de contato!'
    >
      <form className='space-y-4 pt-6' onSubmit={handleSubmit(onSubmit)}>
        <Field
          color='tertiary'
          placeholder='Email'
          error={formState.errors.email}
          {...register('email')}
        />

        <Field
          color='tertiary'
          placeholder='Celular'
          error={formState.errors.phone}
          {...register('phone')}
          maxLength={15}
          onChange={e => {
            setValue('phone', formatPhone(e.target.value))
          }}
        />

        <Field
          type='password'
          color='tertiary'
          placeholder='Senha'
          error={formState.errors.password}
          {...register('password')}
        />

        <Button color='tertiary' className='w-full' type='submit'>
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}
