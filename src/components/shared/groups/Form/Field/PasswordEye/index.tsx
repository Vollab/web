'use client'

import { IPasswordEyeProps } from './types'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { Hide, Show } from 'src/assets/icons'

export const PasswordEye = ({
  show,
  fill,
  enabled,
  onClick
}: IPasswordEyeProps) =>
  enabled ? (
    <Button onClick={onClick}>
      {show ? (
        <Hide fill={fill} className='h-6' />
      ) : (
        <Show fill={fill} className='h-6' />
      )}
    </Button>
  ) : (
    <></>
  )
