import { ActivityArea } from 'types-vollab/dist/shared/activity-area'

export type TActivityAreas = (data: ActivityArea['id'][]) => Promise<void>
