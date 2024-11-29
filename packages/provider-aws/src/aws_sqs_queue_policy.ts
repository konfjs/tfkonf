import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSqsQueuePolicyArgs {
  policy: string;
  queue_url: string;
}
export class aws_sqs_queue_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSqsQueuePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_sqs_queue_policy");
  }
}