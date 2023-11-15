'use client'

import { useRouter } from 'next/navigation'

import { Link } from 'common/types/routes/shared'

import { LinkLabel } from 'src/components/shared/atoms/LinkLabel'

interface ILinksProps {
  links?: Link[]
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
