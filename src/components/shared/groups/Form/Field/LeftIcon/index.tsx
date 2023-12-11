'use client'

import { ILeftIconProps } from './types'

import { ReactNode } from 'react'

import { colors } from 'src/styles/custom/colors'

import Tooltip from 'src/components/shared/molecules/Tooltip'

import { Danger } from 'src/assets/icons'

const Trigger = () => (
  <div className=''>
    <Danger className='h-6' fill={colors.error[500]} />
  </div>
)

const Content = ({ message }: { message: string }): ReactNode => (
  <span className='text-gray-50'>{message}</span>
)

export const LeftIcon = ({ error, icon }: ILeftIconProps) =>
  error ? (
    <Tooltip
      trigger={Trigger}
      color={colors.error[500]}
      content={() => <Content message={error.message} />}
    />
  ) : icon ? (
    <>{icon}</>
  ) : (
    <></>
  )
