import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsConnectHoursOfOperationArgsConfigEndTime {
  hours: number;
  minutes: number;
}
export interface AwsConnectHoursOfOperationArgsConfigStartTime {
  hours: number;
  minutes: number;
}
export interface AwsConnectHoursOfOperationArgsConfig {
  day: string;
  end_time: AwsConnectHoursOfOperationArgsConfigEndTime;
  start_time: AwsConnectHoursOfOperationArgsConfigStartTime;
}
export interface AwsConnectHoursOfOperationArgs {
  description?: string;
  instance_id: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  time_zone: string;
  config: AwsConnectHoursOfOperationArgsConfig;
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