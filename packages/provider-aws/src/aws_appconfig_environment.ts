import { TerraformConfig, TerraformResource } from "tfs";
export interface Monitor {
  alarm_arn: string;
  alarm_role_arn?: string;
}
export interface AwsAppconfigEnvironmentArgs {
  application_id: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  monitor: Monitor;
}
export class aws_appconfig_environment extends TerraformResource {
  readonly arn!: string;
  readonly description?: string;
  readonly environment_id!: string;
  readonly id!: string;
  readonly state!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppconfigEnvironmentArgs) {
    super(config, "resource", args, resourceName, "aws_appconfig_environment");
  }
}