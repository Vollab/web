import { ICreateVacancyProps, IFormData } from './types'

import { FormEventHandler, useState } from 'react'

import { useActivityAreas } from 'src/api/requests/activityAreas/useActivityAreas'
import { useCreateVacancy as useCreateVacancyApi } from 'src/api/requests/demands/vacancies/create/useCreateVacancy'
import { useCities } from 'src/api/requests/useCities'

import { title } from 'src/components/pages/MyDemands/AddDemand/Form/useForm'
import {
  ISelectOption,
  ISelectProps
} from 'src/components/shared/groups/Form/Select/types'

import { useDemandContext } from 'src/contexts/Demand'
import { queryClient } from 'src/contexts/ReactQuery'
import { useToastContext } from 'src/contexts/Toast'

import { states as brStates } from 'src/static/states'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm as useFormHook } from 'react-hook-form'
import { VacancyWorkMode } from 'types-vollab/dist/src/shared/vacancy'

const description = Joi.string().required().max(255).min(20).messages({
  'string.empty': 'Informe uma descrição!',
  'any.required': 'Informe uma descrição!',
  'string.min': 'Mínimo de 20 caracteres!',
  'string.max': 'Limite máximo de 255 caracteres atingido!'
})

const resolver = joiResolver(Joi.object({ name: title, description }))

const workModes = [
  { value: 'IN_PERSON', label: 'Presencial' },
  { value: 'REMOTE', label: 'Remoto' },
  { value: 'HYBRID', label: 'Hibrido' }
]

const states = brStates.map(state => ({ label: state, value: state }))

export const useCreateVacancy = ({ closeModal }: ICreateVacancyProps) => {
  const { demand } = useDemandContext()
  const { toastRef } = useToastContext()
  const { mutateAsync } = useCreateVacancyApi()

  const [city, setCity] = useState<ISelectOption>()
  const [state, setState] = useState<ISelectOption>()
  const [workMode, setWorkMode] = useState<ISelectOption>()
  const [activityArea, setActivityArea] = useState<ISelectOption>()

  const [showLocation, setShowLocation] = useState(false)

  const { data: cities } = useCities(state?.value)
  const { data: activityAreas } = useActivityAreas()

  const { handleSubmit, register, formState, setValue } =
    useFormHook<IFormData>({
      resolver,
      defaultValues: { name: '', description: '' }
    })

  const onSubmit = handleSubmit(async data => {
    closeModal()

    if (!demand?.id || !activityArea || !workMode) {
      toastRef?.current?.triggerToast([{ variant: 'error' }])

      return
    }

    const { vacancy } = await mutateAsync({
      name: data.name,
      city: city?.value,
      state: state?.value,
      demand_id: demand?.id,
      description: data.description,
      activity_area_id: activityArea.value,
      work_mode: workMode.value as VacancyWorkMode
    })

    if (vacancy) {
      queryClient.refetchQueries(['demand/vacancies', demand.id])

      toastRef?.current?.triggerToast([
        { variant: 'success', content: 'Vaga criada com sucesso!' }
      ])
    } else toastRef?.current?.triggerToast([{ variant: 'error' }])
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

  const onDescriptionChange: FormEventHandler<any> = e => {
    setValue('description', e.currentTarget.value)
  }

  const onActivityAreaChange: ISelectProps['onChange'] = newValue => {
    setActivityArea(newValue)
  }

  return {
    onSubmit,
    showLocation,
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
        maxLength: 255,
        placeholder: 'Descrição',
        onChange: onDescriptionChange,
        ref: register('description').ref,
        error: formState.errors.description as any
      },
      name: {
        maxLength: 30,
        ...register('name'),
        placeholder: 'Título',
        error: formState.errors.name
      }
    }
  }
}
