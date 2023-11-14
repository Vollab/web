'use client'

import { useRouter } from 'next/navigation'

import { LinkLabel } from 'src/components/shared/atoms/LinkLabel'

import { ILink } from 'src/types/shared.types'

interface ILinksProps {
  links?: ILink[]
}

export const Links = ({ links }: ILinksProps) => {
  const { push } = useRouter()

  const onLinkClick = (href: string) => {
    push(href)
  }

  return links ? (
    <ul className='flex-col gap-1 flex py-2'>
      {links?.map(({ label, href }) => (
        <LinkLabel
          key={label}
          title={label}
          onClick={() => onLinkClick(href)}
        />
      ))}
    </ul>
  ) : (
    <></>
  )
}
