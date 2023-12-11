import { usePathname, useRouter } from 'next/navigation'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { IChildrenProps } from 'src/types/react.types'

import { tv } from 'tailwind-variants'

const buttonTv = tv({
  base: 'py-4 w-full flex items-center justify-center transition-transform duration-100',
  defaultVariants: { isSelected: false },
  variants: {
    isSelected: {
      true: 'scale-[1.1] ',
      false: 'opacity-70'
    }
  }
})

export interface IItemProps extends IChildrenProps {
  route: string
}

export const Item = ({ route, children }: IItemProps) => {
  const { push } = useRouter()
  const pathname = usePathname()
  const isSelected = pathname.startsWith(route)

  return (
    <li className='flex-1'>
      <Button
        onClick={() => push(route)}
        style={{ scale: isSelected ? 1.2 : 1 }}
        className={buttonTv({ isSelected })}
      >
        {children}
      </Button>
    </li>
  )
}
