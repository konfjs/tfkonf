import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsConnectHoursOfOperationArgsconfigEndTime {
  hours: number;
  minutes: number;
}
export interface AwsConnectHoursOfOperationArgsconfigStartTime {
  hours: number;
  minutes: number;
}
export interface AwsConnectHoursOfOperationArgsconfig {
  day: string;
  end_time: AwsConnectHoursOfOperationArgsconfigEndTime;
  start_time: AwsConnectHoursOfOperationArgsconfigStartTime;
}
export interface AwsConnectHoursOfOperationArgs {
  description?: string;
  instance_id: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  time_zone: string;
  config: AwsConnectHoursOfOperationArgsconfig;
}
export class aws_connect_hours_of_operation extends TerraformResource {
  readonly arn!: string;
  readonly hours_of_operation_id!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectHoursOfOperationArgs) {
    super(config, "resource", args, resourceName, "aws_connect_hours_of_operation");
  }
}