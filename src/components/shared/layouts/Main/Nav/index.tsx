import { ProfileButton } from '../ProfileButton'

import { useRouter } from 'next/navigation'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { House, Projects } from 'src/assets/icons'

export const Nav = () => {
  const { push } = useRouter()

  const onMyDemandsClick = () => {
    push('/my-demands')
  }

  const onDemandsClick = () => {
    push('/demands')
  }

  return (
    <nav className='bg-primary-500 fixed bottom-0 left-0 right-0 z-10'>
      <ul className='flex items-center justify-center'>
        <li className='flex-1'>
          <Button
            onClick={onMyDemandsClick}
            className='py-4 w-full flex items-center justify-center'
          >
            <Projects fill={colors.gray[50]} className='h-6 w-6' />
          </Button>
        </li>

        <li className='flex-1'>
          <Button
            onClick={onDemandsClick}
            className='py-4 w-full flex items-center justify-center'
          >
            <House fill={colors.gray[50]} className='h-7 w-7' />
          </Button>
        </li>

        <li className='flex-1'>
          <ProfileButton />
        </li>
      </ul>
    </nav>
  )
}
