import { useQuery } from 'src/hooks/ReactQuery/useQuery'

import { capitalize } from 'src/utils/capitalize'

type TResponse = { nome: string; codigo_ibge: string }[]

export const useCities = (uf?: string) =>
  useQuery(
    ['city', uf || ''],
    async () => {
      const res = await fetch(
        `https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`
      )

      return await res.json()
    },
    {
      enabled: !!uf,
      select: (data: TResponse) =>
        data.map(data => {
          const value = capitalize(data.nome)

          return { value, label: value }
        })
    }
  )
