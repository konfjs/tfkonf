import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSqsQueueRedriveAllowPolicyArgs {
  queue_url: string;
  redrive_allow_policy: string;
}
export class aws_sqs_queue_redrive_allow_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSqsQueueRedriveAllowPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_sqs_queue_redrive_allow_policy");
  }
}