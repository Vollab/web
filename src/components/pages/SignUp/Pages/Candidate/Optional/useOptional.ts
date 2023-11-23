import { useState } from 'react'

import { useCandidateContext } from 'src/contexts/SignUp/Candidate'

import { useSubmitActions } from 'src/hooks/SignUp/useSubmitActions'
import { useCandidateSignUp } from 'src/hooks/api/useCandidateSignUp'

import { Link } from 'types-vollab/dist/shared/link'

export const useOptional = () => {
  const [avatar, setAvatar] = useState<string>()
  const [links, setLinks] = useState<Link[]>([])
  const { candidateData } = useCandidateContext()

  const { mutateAsync, isError, error, isSuccess } = useCandidateSignUp()
  useSubmitActions({ isError, error, isSuccess })

  const onCreateClick = async () => {
    await mutateAsync({
      name: candidateData.name,
      phone: candidateData.phone,
      email: candidateData.email,
      password: candidateData.password,
      biography: candidateData.biography
    })
  }

  return { avatar, setAvatar, onCreateClick, links, setLinks }
}
