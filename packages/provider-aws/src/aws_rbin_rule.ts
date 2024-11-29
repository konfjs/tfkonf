import { TerraformConfig, TerraformResource } from "tfs";
export interface UnlockDelay {
  unlock_delay_unit: string;
  unlock_delay_value: number;
}
export interface LockConfiguration {
  unlock_delay: UnlockDelay;
}
export interface ResourceTags {
  resource_tag_key: string;
  resource_tag_value?: string;
}
export interface RetentionPeriod {
  retention_period_unit: string;
  retention_period_value: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRbinRuleArgs {
  resource_type: string;
  tags?: {
    [key: string]: string;
  };
  lock_configuration: LockConfiguration;
  resource_tags: ResourceTags;
  retention_period: RetentionPeriod;
  timeouts: Timeouts;
}
export class aws_rbin_rule extends TerraformResource {
  readonly arn!: string;
  readonly description?: string;
  readonly id!: string;
  readonly lock_end_time!: string;
  readonly lock_state!: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRbinRuleArgs) {
    super(config, "resource", args, resourceName, "aws_rbin_rule");
  }
}