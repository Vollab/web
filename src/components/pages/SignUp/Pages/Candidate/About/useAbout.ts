import { FormEventHandler, useEffect, useState } from 'react'

import { ISelectOption } from 'src/components/shared/groups/Form/Select/types'

import { useCandidateContext } from 'src/contexts/SignUp/Candidate'
import { useStepsContext } from 'src/contexts/SignUp/Steps'
import { useToastContext } from 'src/contexts/Toast'

import { biography } from 'src/schemas/biography'

import { useActivityAreas } from 'src/hooks/api/useActivityAreas'

import { generateToasts } from 'src/utils/generateToasts'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'

interface IAbout {
  biography?: CandidateSignUpRequest['biography']
}

const resolver = joiResolver(Joi.object({ biography: biography }))

export const useAbout = () => {
  const { setStep } = useStepsContext()
  const { toastRef } = useToastContext()
  const { data, error, isError } = useActivityAreas()
  const [triedToSubmit, setTriedToSubmit] = useState(false)
  const { setCandidateData, candidateData } = useCandidateContext()
  const [activityAreas, setActivityAreas] = useState<ISelectOption[]>(
    candidateData?.activity_areas.map(({ id, name }) => ({
      label: name,
      value: id
    }))
  )

  const { register, handleSubmit, formState, setValue } = useForm<IAbout>({
    resolver,
    defaultValues: { biography: candidateData?.biography }
  })

  const showActivityAreaError = activityAreas.length === 0 && triedToSubmit

  const activityAreasOptions =
    data?.activity_areas.map(({ id, name }) => ({
      value: id,
      label: name
    })) || []

  const onSubmit = ({ biography }: IAbout) => {
    if (activityAreas.length === 0 || !biography) return

    setCandidateData(prev => ({ ...prev, biography, activityAreas }))
    setStep(3)
  }

  const onActivityAreasChange = (newValue: unknown) => {
    setActivityAreas(newValue as ISelectOption[])
  }

  const onNextClick = () => {
    setTriedToSubmit(true)
  }

  const onTextAreaChange: FormEventHandler<any> = e =>
    setValue('biography', e.currentTarget.value)

  useEffect(() => {
    isError && toastRef?.current?.triggerToast(generateToasts(error))
  }, [error, isError, toastRef])

  return {
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
  }
}
