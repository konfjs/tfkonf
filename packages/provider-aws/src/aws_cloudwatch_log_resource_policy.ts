import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchLogResourcePolicyArgs {
  policy_document: string;
  policy_name: string;
}

export class aws_cloudwatch_log_resource_policy extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchLogResourcePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_log_resource_policy");
  }
}
