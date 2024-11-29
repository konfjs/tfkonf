import { TerraformConfig, TerraformResource } from "tfs";
export interface EndTime {
  hours: number;
  minutes: number;
}
export interface StartTime {
  hours: number;
  minutes: number;
}
export interface Config {
  day: string;
  end_time: EndTime;
  start_time: StartTime;
}
export interface AwsConnectHoursOfOperationArgs {
  description?: string;
  instance_id: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  time_zone: string;
  config: Config;
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