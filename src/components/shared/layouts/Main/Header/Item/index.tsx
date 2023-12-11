import { usePathname, useRouter } from 'next/navigation'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/groups/Buttons/Button'

interface IItemProps {
  route: string
  label: string
  color?: string
  selectedColor?: string
}

export const Item = ({
  route,
  color,
  label,
  selectedColor = colors.primary[500]
}: IItemProps) => {
  const { push } = useRouter()
  const pathname = usePathname()

  const isSelected = pathname.startsWith(route)

  return (
    <li>
      <Button
        onClick={() => {
          push(route)
        }}
        className='py-4 w-full flex items-start justify-center flex-col gap-y-1'
      >
        <span
          style={{ color: isSelected ? selectedColor : color }}
          className={isSelected ? 'font-semibold' : 'font-normal'}
        >
          {label}
        </span>

        <div
          className='w-1/4 h-1 rounded-full'
          style={{
            backgroundColor: isSelected ? selectedColor : 'transparent'
          }}
        />
      </Button>
    </li>
  )
}
