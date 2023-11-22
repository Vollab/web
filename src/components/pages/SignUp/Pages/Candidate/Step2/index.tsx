import { FormLayout } from '../../FormLayout'

import { useContext, useEffect, useRef, useState } from 'react'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Select } from 'src/components/shared/groups/Form'
import { LeftIcon } from 'src/components/shared/groups/Form/Field/LeftIcon'
import { ISelectOption } from 'src/components/shared/groups/Form/Select/types'
import { Textarea } from 'src/components/shared/groups/Form/Textarea'
import { IForwardToast, Toast } from 'src/components/shared/molecules/Toast'

import { useActivityAreas } from 'src/hooks/api/useActivityAreas'

import { CandidateContext } from '..'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { CandidateSignUpRequest } from 'types-vollab/dist/routes/candidates/sign-up'

interface IStep2 {
  biography?: CandidateSignUpRequest['biography']
}

const resolver = joiResolver(
  Joi.object({
    biography: Joi.string().required().max(255).min(20).messages({
      'string.empty': 'Informe sua biografia!',
      'any.required': 'Informe sua biografia!',
      'string.min': 'Mínimo de 20 caracteres!',
      'string.max': 'Limite máximo de caracteres atingido!'
    })
  })
)

export const Step2 = () => {
  const toastRef = useRef<IForwardToast>(null)
  const { data, error, isError } = useActivityAreas()
  const [triedToSubmit, setTriedToSubmit] = useState(false)

  const { setStep, setCandidateData, candidateData } =
    useContext(CandidateContext)

  const [activityAreas, setActivityAreas] = useState<ISelectOption[]>(
    candidateData?.activityAreas || []
  )

  const { register, handleSubmit, formState, setValue } = useForm<IStep2>({
    resolver,
    defaultValues: { biography: candidateData?.biography }
  })

  const onSubmit = ({ biography }: IStep2) => {
    if (activityAreas.length === 0 || !biography) return

    setCandidateData(prev => ({ ...prev, biography, activityAreas }))
    setStep(3)
  }

  useEffect(() => {
    isError &&
      toastRef.current?.triggerToast({
        variant: 'error',
        content: error.message
      })
  }, [isError, error])

  return (
    <>
      <FormLayout
        role='Candidato'
        title='Sobre você'
        content='Agora fale um pouco sobre você e selecione suas áreas de atuação!'
      >
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 pt-6'>
          <div className='relative'>
            <div className='absolute -left-8 top-2'>
              {activityAreas.length === 0 && triedToSubmit && (
                <LeftIcon
                  error={{ message: 'Selecione uma area de atuação!' }}
                />
              )}
            </div>

            <Select
              isMulti
              color='secondary'
              value={activityAreas}
              placeholder='Área de atuação'
              onChange={newValue => {
                setActivityAreas(newValue as ISelectOption[])
              }}
              options={
                data?.activity_areas.map(({ id, name }) => ({
                  value: id,
                  label: name
                })) || []
              }
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
            type='submit'
            color='secondary'
            onClick={() => {
              setTriedToSubmit(true)
            }}
            className='w-full'
          >
            Próximo passo
          </Button>
        </form>
      </FormLayout>

      <Toast ref={toastRef} />
    </>
  )
}
