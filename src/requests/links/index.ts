import { TLinks } from './types'

import { api } from 'src/services/api'

export const links: TLinks = async links => {
  if (links.length > 0)
    for (let i = 0; i < links.length; i++)
      api.post({
        url: `/api/users/links`,
        data: { url: links[i].url, text: links[i].text }
      })
}
