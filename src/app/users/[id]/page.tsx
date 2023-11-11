import { User } from 'src/components/pages/User'

interface IUserPageParams {
  params: { id: string }
}

const UserPage = ({ params }: IUserPageParams) => <User id={params.id} />

export default UserPage
