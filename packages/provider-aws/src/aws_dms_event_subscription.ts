import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDmsEventSubscriptionArgs {
  enabled?: boolean;
  event_categories: string[];
  name: string;
  sns_topic_arn: string;
  source_ids?: string[];
  source_type: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: Timeouts;
}
export class aws_dms_event_subscription extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDmsEventSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_dms_event_subscription");
  }
}