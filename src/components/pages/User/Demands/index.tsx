import { usePathname } from 'next/navigation'

import { useDemands } from 'src/api/requests/demands/getAll/useDemands'
import { useUser } from 'src/api/requests/users/useUser'

import { Demand } from 'src/components/shared/organisms/Demand'

export const Demands = () => {
  const { data } = useDemands()
  const pathname = usePathname()
  const { data: userData } = useUser({ id: pathname.split('/')[2] })

  const myDemands = data?.demands.filter(
    demand => demand.orderer.id === userData?.user.id
  )

  return (
    <>
      {myDemands?.map(({ id, orderer, resume, status, title, vacancies }) => (
        <li key={id}>
          <Demand demand={{ id, title, resume, status, orderer, vacancies }} />
        </li>
      ))}
    </>
  )
}
