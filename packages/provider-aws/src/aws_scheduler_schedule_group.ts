import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSchedulerScheduleGroupArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsSchedulerScheduleGroupArgs {
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsSchedulerScheduleGroupArgsTimeouts;
}
export class aws_scheduler_schedule_group extends TerraformResource {
  readonly arn!: string;
  readonly creation_date!: string;
  readonly id?: string;
  readonly last_modification_date!: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSchedulerScheduleGroupArgs) {
    super(config, "resource", args, resourceName, "aws_scheduler_schedule_group");
  }
}