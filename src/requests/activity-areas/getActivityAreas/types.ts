import { ActivityAreasResponse } from 'types-vollab/dist/routes/activity-areas'

export type TGetActivityAreas = () =>
  | Promise<ActivityAreasResponse>
  | ActivityAreasResponse
