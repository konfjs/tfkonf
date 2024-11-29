import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCloudwatchLogDataProtectionPolicyArgs {
  log_group_name: string;
  policy_document: string;
}
export class aws_cloudwatch_log_data_protection_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchLogDataProtectionPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_log_data_protection_policy");
  }
}