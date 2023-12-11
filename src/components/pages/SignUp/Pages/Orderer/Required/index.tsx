import { FormLayout } from '../../FormLayout'
import { useRequired } from './useRequired'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Field } from 'src/components/shared/groups/Form/Field'
import { Textarea } from 'src/components/shared/groups/Form/Textarea'

import { formatPhone } from 'src/utils/format/phone'

export const Required = () => {
  const { formState, onTextAreaChange, onSubmit, register, setValue } =
    useRequired()

  return (
    <FormLayout
      color='tertiary'
      role='Solicitante'
      title='Informações obrigatórias'
      content='Adicione suas informações pessoais e de contato!'
    >
      <form className='space-y-4 pt-6' onSubmit={onSubmit}>
        <Field
          color='tertiary'
          {...register('name')}
          placeholder='Nome Completo'
          error={formState.errors.name}
          tws={{ input: 'text-tertiary-500' }}
        />

        <Field
          color='tertiary'
          placeholder='Email'
          {...register('email')}
          error={formState.errors.email}
        />

        <Field
          color='tertiary'
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
          color='tertiary'
          placeholder='Senha'
          {...register('password')}
          error={formState.errors.password}
        />

        <Textarea
          placeholder='Biografia'
          error={formState.errors.biography as any}
          ref={register('biography').ref}
          onChange={onTextAreaChange}
          className='text-tertiary-500'
        />

        <Button color='tertiary' className='w-full' type='submit'>
          Cadastrar
        </Button>
      </form>
    </FormLayout>
  )
}
