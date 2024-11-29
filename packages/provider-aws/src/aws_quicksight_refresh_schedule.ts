import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsQuicksightRefreshScheduleArgsscheduleScheduleFrequencyRefreshOnDay {
  day_of_month?: string;
  day_of_week?: string;
}
export interface AwsQuicksightRefreshScheduleArgsscheduleScheduleFrequency {
  interval: string;
  refresh_on_day: AwsQuicksightRefreshScheduleArgsscheduleScheduleFrequencyRefreshOnDay;
}
export interface AwsQuicksightRefreshScheduleArgsschedule {
  refresh_type: string;
  schedule_frequency: AwsQuicksightRefreshScheduleArgsscheduleScheduleFrequency;
}
export interface AwsQuicksightRefreshScheduleArgs {
  data_set_id: string;
  schedule_id: string;
  schedule: AwsQuicksightRefreshScheduleArgsschedule;
}
export class aws_quicksight_refresh_schedule extends TerraformResource {
  readonly arn!: string;
  readonly aws_account_id?: string;
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightRefreshScheduleArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_refresh_schedule");
  }
}