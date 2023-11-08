/* eslint-disable @next/next/no-img-element */
import { colors } from 'src/styles/custom/colors'

import { AddPhoto, Avatar } from 'src/assets/icons'

import { IClassNameProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

interface IAvatarUploadProps extends IClassNameProps {
  fill?: string
  avatar?: string
  tws?: { icon?: string }
}

export const AvatarUpload = ({
  tws,
  avatar,
  className,
  fill = colors.primary[500]
}: IAvatarUploadProps) => (
  <div className={twMerge('h-28 w-28 relative cursor-pointer', className)}>
    {avatar ? (
      <img src={avatar} alt='avatar' className='w-full h-full rounded-full' />
    ) : (
      <Avatar fill={fill} className='w-full h-full rounded-full' />
    )}

    <AddPhoto
      fill={fill}
      className={twMerge(
        'overflow-visible w-6 absolute right-0 bottom-0 translate-x-3 translate-y-1',
        tws?.icon
      )}
    />
  </div>
)
