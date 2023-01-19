import type { WorkType } from './WorkType'

export interface TimeCardData {
	workType: WorkType
	hours: number
	hoursLastWeek: number
}
