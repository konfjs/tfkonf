import { TerraformConfig, TerraformResource } from "tfs";
export interface EncryptionConfiguration {
  cmk_arn?: string;
  encrypted?: boolean;
}
export interface RetainRule {
  interval: number;
  interval_unit: string;
}
export interface CrossRegionCopy {
  target: string;
  encryption_configuration: EncryptionConfiguration;
  retain_rule: RetainRule;
}
export interface Action {
  name: string;
  cross_region_copy: CrossRegionCopy;
}
export interface Parameters {
  description_regex: string;
  event_type: string;
  snapshot_owner: string[];
}
export interface EventSource {
  type: string;
  parameters: Parameters;
}
export interface Parameters {
  exclude_boot_volume?: boolean;
  no_reboot?: boolean;
}
export interface CreateRule {
  cron_expression?: string;
  interval?: number;
}
export interface DeprecateRule {
  interval: number;
  interval_unit: string;
}
export interface RetainRule {
  interval: number;
  interval_unit: string;
}
export interface CrossRegionCopyRule {
  cmk_arn?: string;
  encrypted: boolean;
  target: string;
  deprecate_rule: DeprecateRule;
  retain_rule: RetainRule;
}
export interface DeprecateRule {
  count?: number;
  interval?: number;
  interval_unit?: string;
}
export interface FastRestoreRule {
  availability_zones: string[];
  count?: number;
  interval?: number;
  interval_unit?: string;
}
export interface RetainRule {
  count?: number;
  interval?: number;
  interval_unit?: string;
}
export interface ShareRule {
  target_accounts: string[];
  unshare_interval?: number;
  unshare_interval_unit?: string;
}
export interface Schedule {
  name: string;
  tags_to_add?: {
    [key: string]: string;
  };
  variable_tags?: {
    [key: string]: string;
  };
  create_rule: CreateRule;
  cross_region_copy_rule: CrossRegionCopyRule;
  deprecate_rule: DeprecateRule;
  fast_restore_rule: FastRestoreRule;
  retain_rule: RetainRule;
  share_rule: ShareRule;
}
export interface PolicyDetails {
  policy_type?: string;
  resource_types?: string[];
  target_tags?: {
    [key: string]: string;
  };
  action: Action;
  event_source: EventSource;
  parameters: Parameters;
  schedule: Schedule;
}
export interface AwsDlmLifecyclePolicyArgs {
  description: string;
  execution_role_arn: string;
  state?: string;
  tags?: {
    [key: string]: string;
  };
  policy_details: PolicyDetails;
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