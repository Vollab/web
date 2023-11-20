import { FormLayout } from '../../FormLayout'

import { useContext } from 'react'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Field } from 'src/components/shared/groups/Form'

import { formatPhone } from 'src/utils/format/phone'

import { CandidateContext } from '..'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { email, name, newPassword, phone } from 'src/schemas'

export const Step1 = () => {
  const { setStep, setCandidateData } = useContext(CandidateContext)

  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: joiResolver(
      Joi.object({ email, name, phone, password: newPassword })
    ),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: ''
    }
  })

  const onSubmit = (data: any) => {
    setCandidateData(data)
    setStep(2)
  }

  return (
    <FormLayout
      role='Candidato'
      title='Informações pessoais'
      content='Adicione suas informações pessoais e de contato!'
    >
      <form className='space-y-4 pt-6' onSubmit={handleSubmit(onSubmit)}>
        <Field
          color='secondary'
          placeholder='Nome Completo'
          error={formState.errors.name}
          tws={{ input: 'text-secondary-500' }}
          {...register('name')}
        />

        <Field
          color='secondary'
          placeholder='Email'
          error={formState.errors.email}
          {...register('email')}
        />

        <Field
          color='secondary'
          placeholder='Celular'
          error={formState.errors.phone}
          {...register('phone')}
          maxLength={16}
          onChange={e => {
            setValue('phone', formatPhone(e.target.value))
          }}
        />

        <Field
          type='password'
          color='secondary'
          placeholder='Senha'
          error={formState.errors.password}
          {...register('password')}
        />

        <Button color='secondary' className='w-full' type='submit'>
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}
