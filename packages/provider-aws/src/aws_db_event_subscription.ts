import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDbEventSubscriptionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDbEventSubscriptionArgs {
  enabled?: boolean;
  event_categories?: string[];
  sns_topic: string;
  source_ids?: string[];
  source_type?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsDbEventSubscriptionArgsTimeouts;
}
export class aws_db_event_subscription extends TerraformResource {
  readonly arn!: string;
  readonly customer_aws_id!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDbEventSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_db_event_subscription");
  }
}