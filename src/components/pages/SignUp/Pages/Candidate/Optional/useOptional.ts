import { useCandidateContext } from 'src/contexts/SignUp/Candidate'

import { useSubmitActions } from 'src/hooks/SignUp/useSubmitActions'
import { useCandidateSignUp } from 'src/hooks/api/useCandidateSignUp'

import { Link } from 'types-vollab/dist/shared/link'

export const useOptional = () => {
  const { candidateData, setCandidateData } = useCandidateContext()
  const { mutateAsync, isError, error, isSuccess } = useCandidateSignUp()

  useSubmitActions({ isError, error, isSuccess })

  const onAvatarChange = (data: any) => {
    setCandidateData(prev => ({ ...prev, avatar: data }))
  }

  const setLinks = (links: Link[]) => {
    setCandidateData(prev => ({ ...prev, links }))
  }

  const onCreateClick = async () => {
    await mutateAsync({
      links: candidateData.links || [],
      avatar: candidateData?.avatar?.formData,
      activityAreas: candidateData.activityAreas || [],
      signup: {
        name: candidateData.name,
        phone: candidateData.phone,
        email: candidateData.email,
        password: candidateData.password,
        biography: candidateData.biography
      }
    })
  }

  return {
    setLinks,
    candidateData,
    onCreateClick,
    onAvatarChange,
    links: candidateData.links
  }
}
