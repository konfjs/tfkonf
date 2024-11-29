import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDocdbEventSubscriptionArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDocdbEventSubscriptionArgs {
  enabled?: boolean;
  event_categories?: string[];
  sns_topic_arn: string;
  source_ids?: string[];
  source_type?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsDocdbEventSubscriptionArgstimeouts;
}
export class aws_docdb_event_subscription extends TerraformResource {
  readonly arn!: string;
  readonly customer_aws_id!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDocdbEventSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_docdb_event_subscription");
  }
}