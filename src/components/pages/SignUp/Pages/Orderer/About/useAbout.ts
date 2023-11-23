import { FormEventHandler } from 'react'

import { useOrdererContext } from 'src/contexts/SignUp/Orderer'
import { useStepsContext } from 'src/contexts/SignUp/Steps'

import { biography } from 'src/schemas/biography'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { name } from 'src/schemas'

interface IAbout {
  name: string
  biography: string
}

const resolver = joiResolver(Joi.object({ name, biography }))

export const useAbout = () => {
  const { setStep } = useStepsContext()
  const { setOrdererData, ordererData } = useOrdererContext()

  const { register, handleSubmit, formState, setValue } = useForm<IAbout>({
    resolver,
    defaultValues: {
      name: ordererData?.name,
      biography: ordererData.biography
    }
  })

  const onSubmit = (data: IAbout) => {
    setOrdererData(prev => ({ ...prev, ...data }))
    setStep(3)
  }

  const onBiographyChange: FormEventHandler<any> = e => {
    setValue('biography', e.currentTarget.value)
  }

  return {
    onSubmit,
    register,
    setValue,
    formState,
    handleSubmit,
    onBiographyChange
  }
}
