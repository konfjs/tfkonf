import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCloudwatchLogDestinationPolicyArgs {
  access_policy: string;
  destination_name: string;
  force_update?: boolean;
}
export class aws_cloudwatch_log_destination_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchLogDestinationPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_log_destination_policy");
  }
}