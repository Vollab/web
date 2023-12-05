import { IClassNameProps } from 'src/types/react.types'

import { Link } from 'types-vollab/dist/src/shared/link'

export interface ILinksFormProps extends IClassNameProps {
  links?: Omit<Link, 'id'>[]
  color?: 'primary' | 'secondary' | 'tertiary'
  setLinks: (newState: ILinksFormProps['links']) => void
}

export interface IUseLinksFormsParams {
  links?: ILinksFormProps['links']
  setLinks: ILinksFormProps['setLinks']
}
