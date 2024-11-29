import { TerraformConfig, TerraformResource } from "tfs";
export interface RefreshOnDay {
  day_of_month?: string;
  day_of_week?: string;
}
export interface ScheduleFrequency {
  interval: string;
  refresh_on_day: RefreshOnDay;
}
export interface Schedule {
  refresh_type: string;
  schedule_frequency: ScheduleFrequency;
}
export interface AwsQuicksightRefreshScheduleArgs {
  data_set_id: string;
  schedule_id: string;
  schedule: Schedule;
}
export class aws_quicksight_refresh_schedule extends TerraformResource {
  readonly arn!: string;
  readonly aws_account_id?: string;
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightRefreshScheduleArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_refresh_schedule");
  }
}