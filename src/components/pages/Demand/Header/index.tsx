import { OrdererAvatar } from './OrdererAvatar'
import { Status } from './Status'
import { Title } from './Title'

import { colors } from 'src/styles/custom/colors'

import { BackButton } from 'src/components/shared/groups/Buttons/BackButton'

export const Header = () => (
  <header className='px-4 gap-x-4 grid grid-cols-[20px_1fr_1fr_1fr_1fr] bg-gray-50 shadow-sm py-4'>
    <BackButton
      fill={colors.tertiary[500]}
      className='h-5 w-5 row-span-2 my-auto'
    />

    <Title />
    <OrdererAvatar />
    <Status />
  </header>
)
