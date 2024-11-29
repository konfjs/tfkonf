import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRbinRuleArgsLockConfigurationUnlockDelay {
  unlock_delay_unit: string;
  unlock_delay_value: number;
}
export interface AwsRbinRuleArgsLockConfiguration {
  unlock_delay: AwsRbinRuleArgsLockConfigurationUnlockDelay;
}
export interface AwsRbinRuleArgsResourceTags {
  resource_tag_key: string;
  resource_tag_value?: string;
}
export interface AwsRbinRuleArgsRetentionPeriod {
  retention_period_unit: string;
  retention_period_value: number;
}
export interface AwsRbinRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRbinRuleArgs {
  resource_type: string;
  tags?: {
    [key: string]: string;
  };
  lock_configuration: AwsRbinRuleArgsLockConfiguration;
  resource_tags: AwsRbinRuleArgsResourceTags;
  retention_period: AwsRbinRuleArgsRetentionPeriod;
  timeouts?: AwsRbinRuleArgsTimeouts;
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