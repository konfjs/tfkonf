import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNeptuneEventSubscriptionArgs {
  enabled?: boolean;
  event_categories?: string[];
  sns_topic_arn: string;
  source_ids?: string[];
  source_type?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: Timeouts;
}
export class aws_neptune_event_subscription extends TerraformResource {
  readonly arn!: string;
  readonly customer_aws_id!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNeptuneEventSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_neptune_event_subscription");
  }
}