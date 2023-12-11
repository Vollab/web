'use client'

import { Demands } from './Demands'
import { Links } from './Links'

import { useAvatar } from 'src/api/requests/avatar/useAvatar'
import { useUser } from 'src/api/requests/users/useUser'

import { colors } from 'src/styles/custom/colors'

import { MainLayout } from 'src/components/shared/layouts/Main'

import { infos } from 'src/static/infos'

import { Avatar } from 'src/assets/icons'

interface IUserProps {
  id: string
}

export const User = ({ id }: IUserProps) => {
  const { data } = useUser({ id })
  const { data: avatarData } = useAvatar({ id })

  const user = data?.user
  const roleColor = user ? infos.roles[user.role].color : ''
  const roleLabel = user ? infos.roles[user.role].label : ''

  return (
    <MainLayout>
      <main className='content paddingHeader flex flex-col md:flex-row gap-x-6'>
        <article className='w-full md:w-[300px]'>
          <header className='flex gap-4 items-center pt-8 pb-4'>
            <div className='h-14 w-14 '>
              <Avatar
                src={avatarData?.avatar}
                fill={colors.primary[500]}
                className='h-14 w-14 '
              />
            </div>

            <div className='flex flex-col gap-1 justify-center  w-full '>
              <span
                style={{ color: roleColor }}
                className='font-medium text-lg ellipsis'
              >
                {roleLabel}
              </span>

              <h1 className='font-semibold text-xl leading-[24px] text-gray-600 ellipsis'>
                {user?.name}
              </h1>
            </div>
          </header>

          <ul className='flex flex-col gap-4'>
            <li>
              <p className='text-gray-500'>{user?.biography}</p>
            </li>

            <li className='flex flex-col gap-2'>
              <span className='font-medium text-lg'>Email:</span>

              <span className='text-gray-500'>{user?.email}</span>
            </li>

            <li className='flex flex-col gap-2'>
              <span className='font-medium text-lg'>Celular:</span>

              <span className='text-gray-500'>{user?.phone}</span>
            </li>

            <li className='flex flex-col gap-2'>
              <span className='font-medium text-lg'>Links:</span>

              <Links links={[]} />
            </li>
          </ul>
        </article>

        {user?.role === 'orderer' && (
          <div className='flex flex-col gap-4 pt-8'>
            <span className='font-medium text-lg'>Demandas</span>

            <ul className='DefaultGrid md:grid-cols-1 2lg:grid-cols-2'>
              <Demands />
            </ul>
          </div>
        )}

        {user?.role === 'candidate' && (
          <div className='flex flex-col gap-4 pt-8'>
            <span className='font-medium text-lg'>Candidaturas</span>

            <ul className='DefaultGrid md:grid-cols-1 2lg:grid-cols-2'>
              <Demands />
            </ul>
          </div>
        )}
      </main>
    </MainLayout>
  )
}
