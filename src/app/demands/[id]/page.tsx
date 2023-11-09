import { Demand } from 'src/components/pages/Demand'

interface IDemandPageParams {
  params: { id: string }
}

const DemandPage = ({ params: { id } }: IDemandPageParams) => {
  return <Demand id={id} />
}

export default DemandPage
