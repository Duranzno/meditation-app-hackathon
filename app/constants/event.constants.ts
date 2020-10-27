import { SelectData, SwitchData } from 'mui-rff'
import { strings } from './strings'
export const EventDurationStep = 15
const DurationOptions = [0, 15, 30, 45, 60]
const labelDuration = (duration: number): string => `${duration} ${strings.min}`
export const durationData: SelectData[] = DurationOptions.map((dur) => (
  {
    value: dur,
    label: labelDuration(dur),
  }))
export const onlineData: SwitchData[] = [
  { value: true, label: "Online" },
  { value: false, label: "Offline" },
]