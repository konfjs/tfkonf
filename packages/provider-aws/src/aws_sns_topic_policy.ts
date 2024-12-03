import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSnsTopicPolicyArgs {
  arn: string;
  policy: string;
}
export class aws_sns_topic_policy extends TerraformResource {
  readonly id?: string;
  readonly owner!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSnsTopicPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_sns_topic_policy");
  }
}