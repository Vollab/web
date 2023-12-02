import { ILinksFormProps } from 'src/components/shared/molecules/LinksForm'

import { useCandidateContext } from 'src/contexts/SignUp/Candidate'

import { useSubmitActions } from 'src/hooks/SignUp/useSubmitActions'
import { useCandidateSignUp } from 'src/hooks/api/useCandidateSignUp'

export const useOptional = () => {
  const { candidateData, setCandidateData } = useCandidateContext()
  const { mutateAsync, isError, error, isSuccess } = useCandidateSignUp()

  useSubmitActions({ isError, error, isSuccess })

  const onAvatarChange = (data: any) => {
    setCandidateData(prev => ({ ...prev, avatar: data }))
  }

  const setLinks = (links: ILinksFormProps['links']) => {
    setCandidateData(prev => ({ ...prev, links }))
  }

  const onCreateClick = async () => {
    await mutateAsync(candidateData)
  }

  return {
    setLinks,
    candidateData,
    onCreateClick,
    onAvatarChange,
    links: candidateData.links
  }
}
