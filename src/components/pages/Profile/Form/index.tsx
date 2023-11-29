'use client'

import { useForm } from './useForm'

import { AvatarUpload } from 'src/components/shared/atoms/AvatarUpload'
import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Field } from 'src/components/shared/groups/Form/Field'
import { File } from 'src/components/shared/groups/Form/File'
import { Label } from 'src/components/shared/groups/Form/Label'
import { Select } from 'src/components/shared/groups/Form/Select'
import { Textarea } from 'src/components/shared/groups/Form/Textarea'
import { LinksForm } from 'src/components/shared/molecules/LinksForm'

export const Form = () => {
  const { submit, links, setLinks, props } = useForm()

  return (
    <form className='grid grid-cols-3 py-6 px-4 gap-4' onSubmit={submit}>
      <File label='avatar' name='avatar' className='mb-2 mx-auto col-span-3'>
        <AvatarUpload />
      </File>

      <Label className='col-span-3' title='Nome Completo'>
        <Field as='div' {...props.name} />
      </Label>

      <Label className='col-span-3' title='Email'>
        <Field as='div' {...props.email} />
      </Label>

      <Label className='col-span-3' title='Celular'>
        <Field as='div' {...props.phone} />
      </Label>

      <Label title='Area de atuação' className='col-span-3'>
        <Select options={[]} />
      </Label>

      <Label title='Biografia' className='col-span-3'>
        <Textarea {...props.biography} />
      </Label>

      <LinksForm links={links} setLinks={setLinks} className='col-span-3' />

      <Button className='col-span-3' variant='primary' color='primary'>
        Salvar Alterações
      </Button>
    </form>
  )
}
