import { IResizableProps } from 'src/components/shared/groups/Form/ResizableInput/types'

export interface ILabelHoverProps extends IResizableProps {
  onConfirmClick?: () => void
  enabled?: boolean
  custom?: {
    iconFill?: string
    tws?: { pencil?: string; input?: string; label?: string }
  }
}

export interface IUseLabelHoverParams {
  trigger: any
  onConfirmClick?: ILabelHoverProps['onConfirmClick']
}
