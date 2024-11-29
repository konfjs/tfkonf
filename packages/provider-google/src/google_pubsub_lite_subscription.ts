import { TerraformConfig, TerraformResource } from "tfs";
export interface GooglePubsubLiteSubscriptionArgsDeliveryConfig {
  delivery_requirement: string;
}
export interface GooglePubsubLiteSubscriptionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GooglePubsubLiteSubscriptionArgs {
  name: string;
  region?: string;
  topic: string;
  zone?: string;
  delivery_config: GooglePubsubLiteSubscriptionArgsDeliveryConfig;
  timeouts: GooglePubsubLiteSubscriptionArgsTimeouts;
}
export class google_pubsub_lite_subscription extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubLiteSubscriptionArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_lite_subscription");
  }
}