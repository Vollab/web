import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'
import { useDemands } from 'src/api/requests/demands/getAll/useDemands'

import { Demand } from 'src/components/shared/organisms/Demand'

export const Demands = () => {
  const { data } = useDemands()
  const { data: userData } = useCurrentUser()

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
