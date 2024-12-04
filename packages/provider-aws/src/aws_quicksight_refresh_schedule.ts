import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightRefreshScheduleArgsScheduleScheduleFrequencyRefreshOnDay {
  day_of_month?: string;
  day_of_week?: string;
}

export interface AwsQuicksightRefreshScheduleArgsScheduleScheduleFrequency {
  interval: string;
  refresh_on_day: AwsQuicksightRefreshScheduleArgsScheduleScheduleFrequencyRefreshOnDay;
}

export interface AwsQuicksightRefreshScheduleArgsSchedule {
  refresh_type: string;
  schedule_frequency: AwsQuicksightRefreshScheduleArgsScheduleScheduleFrequency;
}

export interface AwsQuicksightRefreshScheduleArgs {
  data_set_id: string;
  schedule_id: string;
  schedule: AwsQuicksightRefreshScheduleArgsSchedule;
}

export class aws_quicksight_refresh_schedule extends TerraformResource {
  readonly arn!: string;
  readonly aws_account_id?: string;
  readonly id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightRefreshScheduleArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_refresh_schedule");
  }
}
