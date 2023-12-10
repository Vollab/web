import { Applicants } from 'src/components/pages/Applicants'

interface IApplicantsPageParams {
  params: { id: string; vacancy_id: string }
}

const ApplicantsPage = ({
  params: { id, vacancy_id }
}: IApplicantsPageParams) => {
  return <Applicants demand_id={id} vacancy_id={vacancy_id} />
}

export default ApplicantsPage
