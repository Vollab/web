import { OrdererAvatar } from './OrdererAvatar'
import { Status } from './Status'
import { Title } from './Title'

import { BackButton } from 'src/components/shared/groups/Buttons/BackButton'

export const Header = () => {
  return (
    <header className='grid grid-cols-[24px_1fr_1fr] py-4 items-center gap-2 px-4 shadow-md'>
      <BackButton />

      <div className='flex flex-col gap-1'>
        <Title />

        <Status />
      </div>

      <OrdererAvatar />
    </header>
  )
}
