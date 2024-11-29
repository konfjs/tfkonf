import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRedshiftEventSubscriptionArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRedshiftEventSubscriptionArgs {
  enabled?: boolean;
  event_categories?: string[];
  name: string;
  severity?: string;
  sns_topic_arn: string;
  source_ids?: string[];
  source_type?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsRedshiftEventSubscriptionArgstimeouts;
}
export class aws_redshift_event_subscription extends TerraformResource {
  readonly arn!: string;
  readonly customer_aws_id!: string;
  readonly id?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftEventSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_event_subscription");
  }
}