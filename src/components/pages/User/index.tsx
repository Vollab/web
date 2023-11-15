import { Links } from './Links'

import { colors } from 'src/styles/custom/colors'

import { MainLayout } from 'src/components/shared/layouts/MainLayout'

import { rolesInfo } from 'src/static/infos'

import { Avatar } from 'src/assets/icons'

import { getUser, selectUser } from 'src/requests/users/getUser'

interface IUserProps {
  id: string
}

export const User = async ({ id }: IUserProps) => {
  const data = selectUser(await getUser({ id }))

  const roleColor = data ? rolesInfo[data.role].color : ''
  const roleLabel = data ? rolesInfo[data.role].label : ''

  return (
    <MainLayout>
      <main className='content'>
        <header className='flex gap-4 justify-between  items-center'>
          <div className='flex flex-col gap-1 justify-center  w-full overflow-hidden'>
            <span
              style={{ color: roleColor }}
              className='font-medium text-lg ellipsis'
            >
              {roleLabel}
            </span>

            <h1 className='font-semibold text-xl leading-9 text-gray-600 ellipsis'>
              {data?.full_name}
            </h1>

            <h2 className='font-semibold text-gray-500 ellipsis text-md'>
              {data?.location}
            </h2>
          </div>

          <div className='h-14 w-14 '>
            <Avatar fill={colors.primary[500]} className='h-14 w-14 ' />
          </div>
        </header>

        <ul className='flex flex-col gap-4 py-4'>
          <li>
            <p className='text-gray-500'>{data?.biography}</p>
          </li>

          <li className='flex flex-col gap-1'>
            <span className='font-medium text-lg'>Email:</span>

            <span className='text-gray-500'>{data?.email}</span>
          </li>

          <li className='flex flex-col gap-1'>
            <span className='font-medium text-lg'>Celular:</span>

            <span className='text-gray-500'>{data?.phone}</span>
          </li>

          <li className='flex flex-col gap-1'>
            <span className='font-medium text-lg'>Links:</span>

            <Links links={data?.links} />
          </li>
        </ul>
      </main>
    </MainLayout>
  )
}
