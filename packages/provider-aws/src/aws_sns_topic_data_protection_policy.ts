import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSnsTopicDataProtectionPolicyArgs {
  arn: string;
  policy: string;
}
export class aws_sns_topic_data_protection_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSnsTopicDataProtectionPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_sns_topic_data_protection_policy");
  }
}