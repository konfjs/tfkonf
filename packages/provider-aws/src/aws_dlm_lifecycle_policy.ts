import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsactionCrossRegionCopyEncryptionConfiguration {
  cmk_arn?: string;
  encrypted?: boolean;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsactionCrossRegionCopyRetainRule {
  interval: number;
  interval_unit: string;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsactionCrossRegionCopy {
  target: string;
  encryption_configuration: AwsDlmLifecyclePolicyArgsPolicyDetailsactionCrossRegionCopyEncryptionConfiguration;
  retain_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsactionCrossRegionCopyRetainRule;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsaction {
  name: string;
  cross_region_copy: AwsDlmLifecyclePolicyArgsPolicyDetailsactionCrossRegionCopy;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsEventSourceparameters {
  description_regex: string;
  event_type: string;
  snapshot_owner: string[];
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsEventSource {
  type: string;
  parameters: AwsDlmLifecyclePolicyArgsPolicyDetailsEventSourceparameters;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsparameters {
  exclude_boot_volume?: boolean;
  no_reboot?: boolean;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleCreateRule {
  cron_expression?: string;
  interval?: number;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleCrossRegionCopyRuleDeprecateRule {
  interval: number;
  interval_unit: string;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleCrossRegionCopyRuleRetainRule {
  interval: number;
  interval_unit: string;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleCrossRegionCopyRule {
  cmk_arn?: string;
  encrypted: boolean;
  target: string;
  deprecate_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleCrossRegionCopyRuleDeprecateRule;
  retain_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleCrossRegionCopyRuleRetainRule;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleDeprecateRule {
  count?: number;
  interval?: number;
  interval_unit?: string;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleFastRestoreRule {
  availability_zones: string[];
  count?: number;
  interval?: number;
  interval_unit?: string;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleRetainRule {
  count?: number;
  interval?: number;
  interval_unit?: string;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleShareRule {
  target_accounts: string[];
  unshare_interval?: number;
  unshare_interval_unit?: string;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsschedule {
  name: string;
  tags_to_add?: {
    [key: string]: string;
  };
  variable_tags?: {
    [key: string]: string;
  };
  create_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleCreateRule;
  cross_region_copy_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleCrossRegionCopyRule;
  deprecate_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleDeprecateRule;
  fast_restore_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleFastRestoreRule;
  retain_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleRetainRule;
  share_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsscheduleShareRule;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetails {
  policy_type?: string;
  resource_types?: string[];
  target_tags?: {
    [key: string]: string;
  };
  action: AwsDlmLifecyclePolicyArgsPolicyDetailsaction;
  event_source: AwsDlmLifecyclePolicyArgsPolicyDetailsEventSource;
  parameters: AwsDlmLifecyclePolicyArgsPolicyDetailsparameters;
  schedule: AwsDlmLifecyclePolicyArgsPolicyDetailsschedule;
}
export interface AwsDlmLifecyclePolicyArgs {
  description: string;
  execution_role_arn: string;
  state?: string;
  tags?: {
    [key: string]: string;
  };
  policy_details: AwsDlmLifecyclePolicyArgsPolicyDetails;
}
export class aws_dlm_lifecycle_policy extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDlmLifecyclePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_dlm_lifecycle_policy");
  }
}