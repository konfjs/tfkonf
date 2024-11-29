import { TerraformConfig, TerraformResource } from "tfs";
export interface DailySettings {
  hour_of_day: number;
  minute_of_hour: number;
}
export interface HandOffTime {
  hour_of_day: number;
  minute_of_hour: number;
}
export interface MonthlySettings {
  day_of_month: number;
  hand_off_time: HandOffTime;
}
export interface End {
  hour_of_day: number;
  minute_of_hour: number;
}
export interface Start {
  hour_of_day: number;
  minute_of_hour: number;
}
export interface CoverageTimes {
  end: End;
  start: Start;
}
export interface ShiftCoverages {
  map_block_key: string;
  coverage_times: CoverageTimes;
}
export interface HandOffTime {
  hour_of_day: number;
  minute_of_hour: number;
}
export interface WeeklySettings {
  day_of_week: string;
  hand_off_time: HandOffTime;
}
export interface Recurrence {
  number_of_on_calls: number;
  recurrence_multiplier: number;
  daily_settings: DailySettings;
  monthly_settings: MonthlySettings;
  shift_coverages: ShiftCoverages;
  weekly_settings: WeeklySettings;
}
export interface AwsSsmcontactsRotationArgs {
  contact_ids: string[];
  name: string;
  start_time?: string;
  tags?: {
    [key: string]: string;
  };
  time_zone_id: string;
  recurrence: Recurrence;
}
export class aws_ssmcontacts_rotation extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmcontactsRotationArgs) {
    super(config, "resource", args, resourceName, "aws_ssmcontacts_rotation");
  }
}