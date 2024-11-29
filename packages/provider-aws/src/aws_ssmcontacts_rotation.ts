import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsmcontactsRotationArgsrecurrenceDailySettings {
  hour_of_day: number;
  minute_of_hour: number;
}
export interface AwsSsmcontactsRotationArgsrecurrenceMonthlySettingsHandOffTime {
  hour_of_day: number;
  minute_of_hour: number;
}
export interface AwsSsmcontactsRotationArgsrecurrenceMonthlySettings {
  day_of_month: number;
  hand_off_time: AwsSsmcontactsRotationArgsrecurrenceMonthlySettingsHandOffTime;
}
export interface AwsSsmcontactsRotationArgsrecurrenceShiftCoveragesCoverageTimesend {
  hour_of_day: number;
  minute_of_hour: number;
}
export interface AwsSsmcontactsRotationArgsrecurrenceShiftCoveragesCoverageTimesstart {
  hour_of_day: number;
  minute_of_hour: number;
}
export interface AwsSsmcontactsRotationArgsrecurrenceShiftCoveragesCoverageTimes {
  end: AwsSsmcontactsRotationArgsrecurrenceShiftCoveragesCoverageTimesend;
  start: AwsSsmcontactsRotationArgsrecurrenceShiftCoveragesCoverageTimesstart;
}
export interface AwsSsmcontactsRotationArgsrecurrenceShiftCoverages {
  map_block_key: string;
  coverage_times: AwsSsmcontactsRotationArgsrecurrenceShiftCoveragesCoverageTimes;
}
export interface AwsSsmcontactsRotationArgsrecurrenceWeeklySettingsHandOffTime {
  hour_of_day: number;
  minute_of_hour: number;
}
export interface AwsSsmcontactsRotationArgsrecurrenceWeeklySettings {
  day_of_week: string;
  hand_off_time: AwsSsmcontactsRotationArgsrecurrenceWeeklySettingsHandOffTime;
}
export interface AwsSsmcontactsRotationArgsrecurrence {
  number_of_on_calls: number;
  recurrence_multiplier: number;
  daily_settings: AwsSsmcontactsRotationArgsrecurrenceDailySettings;
  monthly_settings: AwsSsmcontactsRotationArgsrecurrenceMonthlySettings;
  shift_coverages: AwsSsmcontactsRotationArgsrecurrenceShiftCoverages;
  weekly_settings: AwsSsmcontactsRotationArgsrecurrenceWeeklySettings;
}
export interface AwsSsmcontactsRotationArgs {
  contact_ids: string[];
  name: string;
  start_time?: string;
  tags?: {
    [key: string]: string;
  };
  time_zone_id: string;
  recurrence: AwsSsmcontactsRotationArgsrecurrence;
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