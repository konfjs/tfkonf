import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCloudwatchLogAccountPolicyArgs {
  policy_document: string;
  policy_name: string;
  policy_type: string;
  scope?: string;
  selection_criteria?: string;
}
export class aws_cloudwatch_log_account_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchLogAccountPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_log_account_policy");
  }
}