import { TerraformConfig, TerraformResource } from "tfs";
export interface DeliveryConfig {
  delivery_requirement: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GooglePubsubLiteSubscriptionArgs {
  name: string;
  region?: string;
  topic: string;
  zone?: string;
  delivery_config: DeliveryConfig;
  timeouts: Timeouts;
}
export class google_pubsub_lite_subscription extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubLiteSubscriptionArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_lite_subscription");
  }
}