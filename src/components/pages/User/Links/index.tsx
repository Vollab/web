'use client'

import { useRouter } from 'next/navigation'

import { LinkLabel } from 'src/components/shared/atoms/LinkLabel'

import { Link } from 'types-vollab/dist/src/shared/link'

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
      {links?.map(({ text, url }) => (
        <LinkLabel key={text} title={text} onClick={() => onLinkClick(url)} />
      ))}
    </ul>
  ) : (
    <></>
  )
}
