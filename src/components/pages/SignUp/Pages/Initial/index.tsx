import { useRouter } from 'next/navigation'

import { useContext } from 'react'

import { colors } from 'src/styles/custom/colors'

import { AuthLayout } from 'src/components/shared/layouts/AuthLayout'

import { Person } from 'src/assets/icons'

import { SignUpContext } from '..'

export const Initial = () => {
  const { push } = useRouter()
  const { setPage } = useContext(SignUpContext)

  const onCandidateClick = () => {
    setPage('candidate')
  }

  const onOrdererClick = () => {
    setPage('orderer')
  }

  const onBackClick = () => {
    push('/sign-in')
  }

  return (
    <AuthLayout onBackClick={onBackClick}>
      <section className='p-4 space-y-10'>
        <header>
          <h1 className='text-xl text-primary-500 font-semibold text-center'>
            Você precisa de ajuda ou quer ajudar alguém?
          </h1>
        </header>

        <div className='space-y-2 px-4'>
          <h2 className='text-lg font-medium text-secondary-500'>Candidato</h2>
          <p>Criar seu próprio portfólio resolvendo problemas do mundo real!</p>
        </div>

        <div className='space-y-2 px-4'>
          <h2 className='text-lg font-medium text-tertiary-500'>Solicitante</h2>
          <p>Criar seu próprio portfólio resolvendo problemas do mundo real!</p>
        </div>

        <footer className='flex justify-between items-center px-4'>
          <button
            onClick={onCandidateClick}
            className='h-28 w-28 bg-secondary-500 rounded-2xl flex flex-col items-center justify-center space-y-4'
          >
            <Person className='h-8 w-8' fill={colors.gray[50]} />

            <span className='text-lg font-semibold text-gray-50 text-center'>
              Candidato
            </span>
          </button>

          <button
            onClick={onOrdererClick}
            className='h-28 w-28 bg-tertiary-500 rounded-2xl flex flex-col items-center justify-center space-y-4'
          >
            <Person className='h-8 w-8' fill={colors.gray[50]} />

            <span className='text-lg font-semibold text-gray-50 text-center'>
              Solicitante
            </span>
          </button>
        </footer>
      </section>
    </AuthLayout>
  )
}
