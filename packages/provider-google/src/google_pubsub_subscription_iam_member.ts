import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubSubscriptionIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GooglePubsubSubscriptionIamMemberArgs {
  member: string;
  role: string;
  subscription: string;
  condition: GooglePubsubSubscriptionIamMemberArgsCondition;
}

export class google_pubsub_subscription_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubSubscriptionIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_subscription_iam_member");
  }
}
