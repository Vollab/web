import { Links } from './Links'

import { colors } from 'src/styles/custom/colors'

import { MainLayout } from 'src/components/shared/layouts/MainLayout'

import { rolesInfo } from 'src/static/infos'

import { Avatar } from 'src/assets/icons'

import { ILink, TRole } from 'src/types/shared.types'

interface IUserProps {
  id: string
}

interface IUserData {
  role: TRole
  bio: string
  name: string
  phone: string
  email: string
  avatar?: string
  links?: ILink[]
  location: string
}

export const User = ({}: IUserProps) => {
  const data: IUserData = {
    role: 'orderer',
    avatar: undefined,
    location: 'São Paulo, SP',
    phone: '(11) 9 1447-3529',
    name: 'Miguel Andrade Barreto',
    email: 'miguelandradebarreto2@gmail.com',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem ut provident non nemo nisi distinctio consequuntur optio, pariatur quibusdam nesciunt saepe. Ipsa rerum magnam, sunt aspernatur quaerat commodi consectetur?',
    links: [
      { label: 'Github', href: 'https://github.com/InSTinToS' },
      { label: 'Linkedin', href: 'https://github.com/InSTinToS' }
    ]
  }

  return (
    <MainLayout>
      <main className='content'>
        <ul className='flex flex-col gap-4 py-4'>
          <li className='flex gap-4 justify-between  items-center'>
            <div className='flex flex-col gap-1 justify-center  w-full overflow-hidden'>
              <span
                style={{ color: rolesInfo[data.role].color }}
                className='font-medium text-lg ellipsis'
              >
                {rolesInfo[data.role].label}
              </span>

              <span className='font-semibold text-xl leading-9 text-gray-600 ellipsis'>
                {data.name}
              </span>

              <span className='font-semibold text-gray-500 ellipsis'>
                {data.location}
              </span>
            </div>

            <div className='h-14 w-14 '>
              <Avatar fill={colors.primary[500]} className='h-14 w-14 ' />
            </div>
          </li>

          <li>
            <p className='text-gray-500'>{data.bio}</p>
          </li>

          <li className='flex flex-col gap-1'>
            <span className='font-medium text-lg'>Email:</span>

            <span className='text-gray-500'>{data.email}</span>
          </li>

          <li className='flex flex-col gap-1'>
            <span className='font-medium text-lg'>Celular:</span>

            <span className='text-gray-500'>{data.phone}</span>
          </li>

          <li className='flex flex-col gap-1'>
            <span className='font-medium text-lg'>Links:</span>

            <Links links={data.links} />
          </li>
        </ul>
      </main>
    </MainLayout>
  )
}
