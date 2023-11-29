import { Links } from './Links'

import { colors } from 'src/styles/custom/colors'

import { MainLayout } from 'src/components/shared/layouts/MainLayout'

import { infos } from 'src/static/infos'

import { useUsers } from 'src/hooks/api/useUsers'

import { Avatar } from 'src/assets/icons'

interface IUserProps {
  id: string
}

export const User = async ({ id }: IUserProps) => {
  const { data } = useUsers({ id })

  const user = data?.user

  const roleColor = user ? infos.roles[user.role].color : ''
  const roleLabel = user ? infos.roles[user.role].label : ''

  return (
    <MainLayout>
      <main className='content'>
        <header className='flex gap-4 justify-between  items-center mt-4'>
          <div className='flex flex-col gap-1 justify-center  w-full overflow-hidden'>
            <span
              style={{ color: roleColor }}
              className='font-medium text-lg ellipsis'
            >
              {roleLabel}
            </span>

            <h1 className='font-semibold text-xl leading-9 text-gray-600 ellipsis'>
              {user?.name}
            </h1>
          </div>

          <div className='h-14 w-14 '>
            <Avatar fill={colors.primary[500]} className='h-14 w-14 ' />
          </div>
        </header>

        <ul className='flex flex-col gap-4 py-4'>
          <li>
            <p className='text-gray-500'>{user?.biography}</p>
          </li>

          <li className='flex flex-col gap-1'>
            <span className='font-medium text-lg'>Email:</span>

            <span className='text-gray-500'>{user?.email}</span>
          </li>

          <li className='flex flex-col gap-1'>
            <span className='font-medium text-lg'>Celular:</span>

            <span className='text-gray-500'>{user?.phone}</span>
          </li>

          <li className='flex flex-col gap-1'>
            <span className='font-medium text-lg'>Links:</span>

            <Links links={user?.links} />
          </li>
        </ul>
      </main>
    </MainLayout>
  )
}
