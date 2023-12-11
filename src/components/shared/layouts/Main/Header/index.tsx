import { Item } from './Item'
import { useHeader } from './useHeader'

import { AvatarButton } from 'src/components/shared/groups/Buttons/AvatarButton'
import { Button } from 'src/components/shared/groups/Buttons/Button'

import { Logout } from 'src/assets/icons'

export const Header = () => {
  const { name, avatar, roleColor, roleLabel, onLogoutClick } = useHeader()

  return (
    <header className='flex py-4 items-center shadow-md fixed top-0 left-0 right-0 z-50'>
      <div className='w-full h-full absolute left-0 top-0 bg-gray-50 -z-10' />

      <div className='content flex items-center justify-center gap-4'>
        <AvatarButton
          avatar={avatar}
          route='/profile'
          fill={roleColor}
          className='h-12 w-12'
        />

        <div className='flex flex-col gap-1'>
          <span className='font-semibold text-lg'>Olá, {name}</span>

          <span className='font-medium' style={{ color: roleColor }}>
            {roleLabel}
          </span>
        </div>

        <nav
          className='
            hidden
            md:flex flex-1 pr-2
          '
        >
          <ul className='items-center justify-end flex-1 gap-x-4 flex'>
            <Item route='/my-demands' label='Minhas demandas' />

            <Item label='Demandas' route='/demands' />
          </ul>
        </nav>

        <Button className='ml-auto' onClick={onLogoutClick}>
          <Logout className='h-5 w-5 stroke-gray-500 hover:stroke-error-500' />
        </Button>
      </div>
    </header>
  )
}
