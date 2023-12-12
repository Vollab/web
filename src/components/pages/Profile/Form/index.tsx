'use client'

import { useForm } from './useForm'

import { colors } from 'src/styles/custom/colors'

import { AvatarUpload } from 'src/components/shared/atoms/AvatarUpload'
import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Field } from 'src/components/shared/groups/Form/Field'
import { File } from 'src/components/shared/groups/Form/File'
import { Label } from 'src/components/shared/groups/Form/Label'
import { Select } from 'src/components/shared/groups/Form/Select'
import { Textarea } from 'src/components/shared/groups/Form/Textarea'
import { LinksForm } from 'src/components/shared/molecules/LinksForm'

import { twMerge } from 'tailwind-merge'

export const Form = () => {
  const { onSubmit, links, setLinks, props, isCandidate } = useForm()

  return (
    <form
      onSubmit={onSubmit}
      className='grid grid-cols-[140px_1fr_1fr_1fr] py-6 px-4 gap-y-4 gap-x-10 max-w-screen-lg mx-auto'
    >
      <File
        name='avatar'
        onDataUpdates={() => {}}
        className='mb-2 mx-auto col-span-4 md:col-span-1 md:row-span-2'
      >
        <AvatarUpload
          className='w-[140x] h-[140px]'
          fill={isCandidate ? colors.secondary[500] : colors.tertiary[500]}
        />
      </File>

      <Label className='col-span-4 md:col-span-3' title='Nome Completo'>
        <Field as='div' {...props.name} />
      </Label>

      <Label className='col-span-4 md:col-span-3' title='Celular'>
        <Field as='div' {...props.phone} />
      </Label>

      <Label
        title='Email'
        className={twMerge('col-span-4', isCandidate ? 'md:col-span-2' : '')}
      >
        <Field
          as='div'
          {...props.email}
          className={isCandidate ? 'md:h-[48px]' : ''}
        />
      </Label>

      {isCandidate && (
        <Label title='Area de atuação' className='col-span-4 md:col-span-2'>
          <Select options={[]} />
        </Label>
      )}

      <Label title='Biografia' className='col-span-4'>
        <Textarea {...props.biography} className='text-primary-500' />
      </Label>

      <LinksForm links={links} setLinks={setLinks} className='col-span-4' />

      <Button
        className='col-span-4'
        variant='primary'
        color='primary'
        type='submit'
      >
        Salvar Alterações
      </Button>
    </form>
  )
}
