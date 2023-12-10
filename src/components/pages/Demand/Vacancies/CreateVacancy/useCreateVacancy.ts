import { ICreateVacancyProps, IFormData } from './types'

import { FormEventHandler, useState } from 'react'

import { useActivityAreas } from 'src/api/requests/activityAreas/useActivityAreas'
import { useCreateVacancy as useCreateVacancyApi } from 'src/api/requests/demands/vacancies/create/useCreateVacancy'
import { useCities } from 'src/api/requests/useCities'

import {
  ISelectOption,
  ISelectProps
} from 'src/components/shared/groups/Form/Select/types'

import { useToastContext } from 'src/contexts/Toast'

import { states as brStates } from 'src/static/states'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm as useFormHook } from 'react-hook-form'
import { name } from 'src/schemas'

const description = Joi.string().required().max(255).min(20).messages({
  'string.empty': 'Informe uma descrição!',
  'any.required': 'Informe uma descrição!',
  'string.min': 'Mínimo de 20 caracteres!',
  'string.max': 'Limite máximo de 255 caracteres atingido!'
})

const resolver = joiResolver(Joi.object({ name, description }))

const workModes = [
  { value: 'IN_PERSON', label: 'Presencial' },
  { value: 'REMOTE', label: 'Remoto' },
  { value: 'HYBRID', label: 'Hibrido' }
]

const states = brStates.map(state => ({ label: state, value: state }))

export const useCreateVacancy = ({ closeModal }: ICreateVacancyProps) => {
  const { toastRef } = useToastContext()
  const { mutateAsync } = useCreateVacancyApi()

  const [showLocation, setShowLocation] = useState(false)

  const [city, setCity] = useState<ISelectOption>()
  const [state, setState] = useState<ISelectOption>()
  const [workMode, setWorkMode] = useState<ISelectOption>()
  const [activityArea, setActivityArea] = useState<ISelectOption>()

  const { data: cities } = useCities(state?.value)
  const { data: activityAreas } = useActivityAreas()

  const { handleSubmit, register, formState, setValue } =
    useFormHook<IFormData>({
      resolver,
      defaultValues: { name: '', description: '' }
    })

  const onSubmit = handleSubmit(async data => {
    const { vacancy } = await mutateAsync(data)

    if (vacancy) {
      toastRef?.current?.triggerToast([
        {
          variant: 'success',
          content: 'Vaga criada com sucesso!'
        }
      ])
    } else {
      toastRef?.current?.triggerToast([
        {
          variant: 'error',
          content: 'Falha ao criar vaga, tente novamente mais tarde'
        }
      ])
    }

    closeModal()
  })

  const onWorkModeChange: ISelectProps['onChange'] = option => {
    setShowLocation(option.value !== 'REMOTE')
    setWorkMode(option)
  }

  const onStatesChange: ISelectProps['onChange'] = option => {
    setState(option)
  }

  const onCityChange: ISelectProps['onChange'] = option => {
    setCity(option)
  }

  const onDescriptionChange: FormEventHandler<any> = e =>
    setValue('description', e.currentTarget.value)

  const onActivityAreaChange: ISelectProps['onChange'] = newValue => {
    setActivityArea(newValue)
  }

  return {
    onSubmit,
    showLocation,
    showCities: !!city,
    props: {
      activityAreas: {
        value: activityArea,
        options: activityAreas || [],
        onChange: onActivityAreaChange,
        placeholder: 'Area de atuação'
      },
      cities: {
        value: city,
        options: cities,
        placeholder: 'Cidade',
        onChange: onCityChange
      },
      states: {
        value: state,
        options: states,
        placeholder: 'UF',
        onChange: onStatesChange
      },
      workMode: {
        value: workMode,
        options: workModes,
        onChange: onWorkModeChange,
        placeholder: 'Modo de trabalho'
      },
      description: {
        placeholder: 'Descrição',
        onChange: onDescriptionChange,
        ref: register('description').ref,
        error: formState.errors.description as any
      },
      name: {
        error: formState.errors.name,
        ...register('name'),
        placeholder: 'Título'
      }
    }
  }
}
