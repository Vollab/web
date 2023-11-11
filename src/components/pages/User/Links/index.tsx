'use client'

import { useRouter } from 'next/navigation'

import { LinkLabel } from 'src/components/shared/atoms/LinkLabel'

interface ILinksProps {
  links?: { title: string; link: string }[]
}

export const Links = ({ links }: ILinksProps) => {
  const { push } = useRouter()

  const onLinkClick = (href: string) => {
    push(href)
  }

  return links ? (
    <ul className='flex-col gap-1 flex py-2'>
      {links?.map(({ title, link }) => (
        <LinkLabel
          key={title}
          title={title}
          onClick={() => onLinkClick(link)}
        />
      ))}
    </ul>
  ) : (
    <></>
  )
}
