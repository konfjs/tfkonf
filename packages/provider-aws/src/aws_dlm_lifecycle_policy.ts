import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsActionCrossRegionCopyEncryptionConfiguration {
  cmk_arn?: string;
  encrypted?: boolean;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsActionCrossRegionCopyRetainRule {
  interval: number;
  interval_unit: string;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsActionCrossRegionCopy {
  target: string;
  encryption_configuration: AwsDlmLifecyclePolicyArgsPolicyDetailsActionCrossRegionCopyEncryptionConfiguration;
  retain_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsActionCrossRegionCopyRetainRule;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsAction {
  name: string;
  cross_region_copy: AwsDlmLifecyclePolicyArgsPolicyDetailsActionCrossRegionCopy;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsEventSourceParameters {
  description_regex: string;
  event_type: string;
  snapshot_owner: string[];
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsEventSource {
  type: string;
  parameters: AwsDlmLifecyclePolicyArgsPolicyDetailsEventSourceParameters;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsParameters {
  exclude_boot_volume?: boolean;
  no_reboot?: boolean;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCreateRule {
  cron_expression?: string;
  interval?: number;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule {
  interval: number;
  interval_unit: string;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCrossRegionCopyRuleRetainRule {
  interval: number;
  interval_unit: string;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCrossRegionCopyRule {
  cmk_arn?: string;
  encrypted: boolean;
  target: string;
  deprecate_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule;
  retain_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCrossRegionCopyRuleRetainRule;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleDeprecateRule {
  count?: number;
  interval?: number;
  interval_unit?: string;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleFastRestoreRule {
  availability_zones: string[];
  count?: number;
  interval?: number;
  interval_unit?: string;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleRetainRule {
  count?: number;
  interval?: number;
  interval_unit?: string;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleShareRule {
  target_accounts: string[];
  unshare_interval?: number;
  unshare_interval_unit?: string;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetailsSchedule {
  name: string;
  tags_to_add?: {
    [key: string]: string;
  };
  variable_tags?: {
    [key: string]: string;
  };
  create_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCreateRule;
  cross_region_copy_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCrossRegionCopyRule;
  deprecate_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleDeprecateRule;
  fast_restore_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleFastRestoreRule;
  retain_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleRetainRule;
  share_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleShareRule;
}
export interface AwsDlmLifecyclePolicyArgsPolicyDetails {
  policy_type?: string;
  resource_types?: string[];
  target_tags?: {
    [key: string]: string;
  };
  action: AwsDlmLifecyclePolicyArgsPolicyDetailsAction;
  event_source: AwsDlmLifecyclePolicyArgsPolicyDetailsEventSource;
  parameters: AwsDlmLifecyclePolicyArgsPolicyDetailsParameters;
  schedule: AwsDlmLifecyclePolicyArgsPolicyDetailsSchedule;
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