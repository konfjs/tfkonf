import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIotLoggingOptionsArgs {
  default_log_level: string;
  disable_all_logs?: boolean;
  role_arn: string;
}
export class aws_iot_logging_options extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotLoggingOptionsArgs) {
    super(config, "resource", args, resourceName, "aws_iot_logging_options");
  }
}