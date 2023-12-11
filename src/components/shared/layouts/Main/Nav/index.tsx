import { Item } from './Item'

import { colors } from 'src/styles/custom/colors'

import { House, Profile, Projects } from 'src/assets/icons'

export const Nav = () => (
  <nav className='bg-primary-500 fixed bottom-0 left-0 right-0 z-10 md:hidden'>
    <ul className='flex items-center justify-center'>
      <Item route='/my-demands'>
        <Projects fill={colors.gray[50]} className='h-6 w-6' />
      </Item>

      <Item route='/demands'>
        <House fill={colors.gray[50]} className='h-7 w-7' />
      </Item>

      <Item route='/profile'>
        <Profile fill={colors.gray[50]} className='h-6 w-6' />
      </Item>
    </ul>
  </nav>
)
