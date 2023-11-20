import { FormLayout } from '../../FormLayout'

import { useContext, useState } from 'react'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Select } from 'src/components/shared/groups/Form'
import { LeftIcon } from 'src/components/shared/groups/Form/Field/LeftIcon'
import { ISelectOption } from 'src/components/shared/groups/Form/Select/types'
import { Textarea } from 'src/components/shared/groups/Form/Textarea'

import { CandidateContext } from '..'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'

export const Step2 = () => {
  const [triedToSubmit, setTriedToSubmit] = useState(false)
  const { setStep, setCandidateData } = useContext(CandidateContext)
  const [activityAreas, setActivityAreas] = useState<ISelectOption[]>([])
  const { register, handleSubmit, formState, setValue } = useForm({
    defaultValues: { biography: '' },
    reValidateMode: 'onChange',
    resolver: joiResolver(
      Joi.object({
        biography: Joi.string().required().max(255).min(20).messages({
          'string.empty': 'Informe sua biografia!',
          'any.required': 'Informe sua biografia!',
          'string.min': 'Mínimo de 20 caracteres!',
          'string.max': 'Limite máximo de caracteres atingido!'
        })
      })
    )
  })

  const onSubmit = (data: any) => {
    if (activityAreas.length === 0) return

    setCandidateData(prev => ({
      ...prev,
      ...data,
      activityAreas: activityAreas.map(({ label }) => label)
    }))

    setStep(3)
  }

  return (
    <FormLayout
      role='Candidato'
      title='Area de atuação'
      content='Agora fale um pouco sobre sua área de atuação!'
    >
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 pt-6'>
        <div className='relative'>
          <div className='absolute -left-8 top-2'>
            {activityAreas.length === 0 && triedToSubmit && (
              <LeftIcon error={{ message: 'Selecione uma area de atuação!' }} />
            )}
          </div>

          <Select
            isMulti
            color='secondary'
            placeholder='Área de atuação'
            onChange={newValue => {
              setActivityAreas(newValue as ISelectOption[])
            }}
            options={[
              { label: 'Programador', value: 'developer' },
              { label: 'Design', value: 'designer' }
            ]}
          />
        </div>

        <Textarea
          placeholder='Biografia'
          error={formState.errors.biography as any}
          ref={register('biography').ref}
          onChange={e => setValue('biography', e.currentTarget.value)}
          className='text-secondary-500'
        />

        <Button
          color='secondary'
          type='submit'
          className='w-full'
          onClick={() => {
            setTriedToSubmit(true)
          }}
        >
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}
