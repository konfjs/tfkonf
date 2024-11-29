import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSqsQueueRedrivePolicyArgs {
  queue_url: string;
  redrive_policy: string;
}
export class aws_sqs_queue_redrive_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSqsQueueRedrivePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_sqs_queue_redrive_policy");
  }
}