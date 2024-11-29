import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSnsTopicSubscriptionArgs {
  confirmation_timeout_in_minutes?: number;
  delivery_policy?: string;
  endpoint: string;
  endpoint_auto_confirms?: boolean;
  filter_policy?: string;
  protocol: string;
  raw_message_delivery?: boolean;
  redrive_policy?: string;
  replay_policy?: string;
  subscription_role_arn?: string;
  topic_arn: string;
}
export class aws_sns_topic_subscription extends TerraformResource {
  readonly arn!: string;
  readonly confirmation_was_authenticated!: boolean;
  readonly filter_policy_scope?: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly pending_confirmation!: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSnsTopicSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_sns_topic_subscription");
  }
}