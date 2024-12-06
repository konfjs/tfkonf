import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubSubscriptionIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GooglePubsubSubscriptionIamBindingArgs {
  members: string[];
  role: string;
  subscription: string;
  condition: GooglePubsubSubscriptionIamBindingArgsCondition;
}

export class google_pubsub_subscription_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubSubscriptionIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_subscription_iam_binding");
  }
}
