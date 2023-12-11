import { ICreateVacancyProps } from './types'

import { useCreateVacancy } from './useCreateVacancy'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { CloseButton } from 'src/components/shared/groups/Buttons/CloseButton'
import { Field } from 'src/components/shared/groups/Form/Field'
import { Select } from 'src/components/shared/groups/Form/Select'
import { Textarea } from 'src/components/shared/groups/Form/Textarea'

export const CreateVacancy = ({ closeModal }: ICreateVacancyProps) => {
  const { props, showLocation, onSubmit } = useCreateVacancy({
    closeModal
  })

  return (
    <form className='ModalContainer' onSubmit={onSubmit}>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl text-primary-500'>Crie uma vaga!</h2>

          <CloseButton onClick={closeModal} />
        </div>

        <p className='leading-[20px]'>
          Adicione uma vaga para sua demanda, assim você poderá
          <b className='text-success-500 font-medium'> aprovar</b> ou
          <b className='text-error-500 font-medium'> recusar</b> candidatos!
        </p>
      </div>

      <Field as='div' {...props.name} className='rounded-xl' />

      <Textarea
        {...props.description}
        color='primary'
        custom={{ inputTw: 'text-primary-500' }}
      />

      <Select color='primary' {...props.activityAreas} />

      <Select {...props.workMode} />

      {showLocation && (
        <div
          className='
            flex flex-col gap-y-4
            sm:grid sm:grid-cols-4 sm:gap-x-4 sm:gap-y-0
          '
        >
          <Select {...props.states} color='primary' menuPlacement='top' />

          {props.states.value && (
            <Select
              {...props.cities}
              color='primary'
              menuPlacement='top'
              className='col-span-3'
            />
          )}
        </div>
      )}

      <Button className='col-span-3' color='success' type='submit'>
        Criar Vaga
      </Button>
    </form>
  )
}
