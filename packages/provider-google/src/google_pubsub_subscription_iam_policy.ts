import { TerraformConfig, TerraformResource } from "tfs";
export interface GooglePubsubSubscriptionIamPolicyArgs {
  policy_data: string;
  subscription: string;
}
export class google_pubsub_subscription_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubSubscriptionIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_subscription_iam_policy");
  }
}