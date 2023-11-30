import { LinksRequest } from 'types-vollab/dist/routes/current-user/links/post'

export type TLinks = (links: LinksRequest[]) => Promise<void>
