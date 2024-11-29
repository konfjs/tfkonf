import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCustomerprofilesDomainArgsMatchingAutoMergingConflictResolution {
  conflict_resolving_model: string;
  source_name?: string;
}
export interface AwsCustomerprofilesDomainArgsMatchingAutoMergingConsolidation {
  matching_attributes_list: any[];
}
export interface AwsCustomerprofilesDomainArgsMatchingAutoMerging {
  enabled: boolean;
  min_allowed_confidence_score_for_merging?: number;
  conflict_resolution: AwsCustomerprofilesDomainArgsMatchingAutoMergingConflictResolution;
  consolidation: AwsCustomerprofilesDomainArgsMatchingAutoMergingConsolidation;
}
export interface AwsCustomerprofilesDomainArgsMatchingExportingConfigS3Exporting {
  s3_bucket_name: string;
  s3_key_name?: string;
}
export interface AwsCustomerprofilesDomainArgsMatchingExportingConfig {
  s3_exporting: AwsCustomerprofilesDomainArgsMatchingExportingConfigS3Exporting;
}
export interface AwsCustomerprofilesDomainArgsMatchingJobSchedule {
  day_of_the_week: string;
  time: string;
}
export interface AwsCustomerprofilesDomainArgsMatching {
  enabled: boolean;
  auto_merging: AwsCustomerprofilesDomainArgsMatchingAutoMerging;
  exporting_config: AwsCustomerprofilesDomainArgsMatchingExportingConfig;
  job_schedule: AwsCustomerprofilesDomainArgsMatchingJobSchedule;
}
export interface AwsCustomerprofilesDomainArgsRuleBasedMatchingAttributeTypesSelector {
  address?: string[];
  attribute_matching_model: string;
  email_address?: string[];
  phone_number?: string[];
}
export interface AwsCustomerprofilesDomainArgsRuleBasedMatchingConflictResolution {
  conflict_resolving_model: string;
  source_name?: string;
}
export interface AwsCustomerprofilesDomainArgsRuleBasedMatchingExportingConfigS3Exporting {
  s3_bucket_name: string;
  s3_key_name?: string;
}
export interface AwsCustomerprofilesDomainArgsRuleBasedMatchingExportingConfig {
  s3_exporting: AwsCustomerprofilesDomainArgsRuleBasedMatchingExportingConfigS3Exporting;
}
export interface AwsCustomerprofilesDomainArgsRuleBasedMatchingMatchingRules {
  rule: string[];
}
export interface AwsCustomerprofilesDomainArgsRuleBasedMatching {
  enabled: boolean;
  max_allowed_rule_level_for_matching?: number;
  max_allowed_rule_level_for_merging?: number;
  attribute_types_selector: AwsCustomerprofilesDomainArgsRuleBasedMatchingAttributeTypesSelector;
  conflict_resolution: AwsCustomerprofilesDomainArgsRuleBasedMatchingConflictResolution;
  exporting_config: AwsCustomerprofilesDomainArgsRuleBasedMatchingExportingConfig;
  matching_rules: AwsCustomerprofilesDomainArgsRuleBasedMatchingMatchingRules;
}
export interface AwsCustomerprofilesDomainArgs {
  dead_letter_queue_url?: string;
  default_encryption_key?: string;
  default_expiration_days: number;
  domain_name: string;
  tags?: {
    [key: string]: string;
  };
  matching: AwsCustomerprofilesDomainArgsMatching;
  rule_based_matching: AwsCustomerprofilesDomainArgsRuleBasedMatching;
}
export class aws_customerprofiles_domain extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCustomerprofilesDomainArgs) {
    super(config, "resource", args, resourceName, "aws_customerprofiles_domain");
  }
}