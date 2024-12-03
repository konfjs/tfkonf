import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSsmcontactsRotationArgsRecurrenceDailySettings {
  hour_of_day: number;
  minute_of_hour: number;
}
export interface AwsSsmcontactsRotationArgsRecurrenceMonthlySettingsHandOffTime {
  hour_of_day: number;
  minute_of_hour: number;
}
export interface AwsSsmcontactsRotationArgsRecurrenceMonthlySettings {
  day_of_month: number;
  hand_off_time: AwsSsmcontactsRotationArgsRecurrenceMonthlySettingsHandOffTime;
}
export interface AwsSsmcontactsRotationArgsRecurrenceShiftCoveragesCoverageTimesEnd {
  hour_of_day: number;
  minute_of_hour: number;
}
export interface AwsSsmcontactsRotationArgsRecurrenceShiftCoveragesCoverageTimesStart {
  hour_of_day: number;
  minute_of_hour: number;
}
export interface AwsSsmcontactsRotationArgsRecurrenceShiftCoveragesCoverageTimes {
  end: AwsSsmcontactsRotationArgsRecurrenceShiftCoveragesCoverageTimesEnd;
  start: AwsSsmcontactsRotationArgsRecurrenceShiftCoveragesCoverageTimesStart;
}
export interface AwsSsmcontactsRotationArgsRecurrenceShiftCoverages {
  map_block_key: string;
  coverage_times: AwsSsmcontactsRotationArgsRecurrenceShiftCoveragesCoverageTimes;
}
export interface AwsSsmcontactsRotationArgsRecurrenceWeeklySettingsHandOffTime {
  hour_of_day: number;
  minute_of_hour: number;
}
export interface AwsSsmcontactsRotationArgsRecurrenceWeeklySettings {
  day_of_week: string;
  hand_off_time: AwsSsmcontactsRotationArgsRecurrenceWeeklySettingsHandOffTime;
}
export interface AwsSsmcontactsRotationArgsRecurrence {
  number_of_on_calls: number;
  recurrence_multiplier: number;
  daily_settings: AwsSsmcontactsRotationArgsRecurrenceDailySettings;
  monthly_settings: AwsSsmcontactsRotationArgsRecurrenceMonthlySettings;
  shift_coverages: AwsSsmcontactsRotationArgsRecurrenceShiftCoverages;
  weekly_settings: AwsSsmcontactsRotationArgsRecurrenceWeeklySettings;
}
export interface AwsSsmcontactsRotationArgs {
  contact_ids: string[];
  name: string;
  start_time?: string;
  tags?: {
    [key: string]: string;
  };
  time_zone_id: string;
  recurrence: AwsSsmcontactsRotationArgsRecurrence;
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