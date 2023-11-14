'use client'

import { useState } from 'react'

import { AvatarUpload } from 'src/components/shared/atoms/AvatarUpload'
import { Button } from 'src/components/shared/atoms/Button'
import { Field, File, Label, Select } from 'src/components/shared/groups/Form'
import { Textarea } from 'src/components/shared/groups/Form/Textarea'
import { ILink, LinksForm } from 'src/components/shared/molecules/LinksForm'

export const Form = () => {
  const [links, setLinks] = useState<ILink[]>([])

  return (
    <div className='grid grid-cols-3 py-6 px-4 gap-4'>
      <File label='avatar' name='avatar' className='mb-2 mx-auto col-span-3'>
        <AvatarUpload />
      </File>

      <Label className='col-span-3' title='Nome Completo'>
        <Field as='div' />
      </Label>

      <Label className='col-span-3' title='Email'>
        <Field as='div' />
      </Label>

      <Label className='col-span-3' title='Celular'>
        <Field as='div' />
      </Label>

      <Label title='Area de atuação' className='col-span-3'>
        <Select options={[]} />
      </Label>

      <Label title='Estado'>
        <Select placeholder='SP' options={[]} />
      </Label>

      <Label title='Cidade' className='col-span-2'>
        <Select options={[]} />
      </Label>

      <Label title='Biografia' className='col-span-3'>
        <Textarea />
      </Label>

      <LinksForm links={links} setLinks={setLinks} className='col-span-3' />

      <Button className='col-span-3' variant='primary' color='primary'>
        Salvar Alterações
      </Button>
    </div>
  )
}
