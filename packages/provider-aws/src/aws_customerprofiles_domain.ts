import { TerraformConfig, TerraformResource } from "tfs";
export interface ConflictResolution {
  conflict_resolving_model: string;
  source_name?: string;
}
export interface Consolidation {
  matching_attributes_list: any[];
}
export interface AutoMerging {
  enabled: boolean;
  min_allowed_confidence_score_for_merging?: number;
  conflict_resolution: ConflictResolution;
  consolidation: Consolidation;
}
export interface S3Exporting {
  s3_bucket_name: string;
  s3_key_name?: string;
}
export interface ExportingConfig {
  s3_exporting: S3Exporting;
}
export interface JobSchedule {
  day_of_the_week: string;
  time: string;
}
export interface Matching {
  enabled: boolean;
  auto_merging: AutoMerging;
  exporting_config: ExportingConfig;
  job_schedule: JobSchedule;
}
export interface AttributeTypesSelector {
  address?: string[];
  attribute_matching_model: string;
  email_address?: string[];
  phone_number?: string[];
}
export interface ConflictResolution {
  conflict_resolving_model: string;
  source_name?: string;
}
export interface S3Exporting {
  s3_bucket_name: string;
  s3_key_name?: string;
}
export interface ExportingConfig {
  s3_exporting: S3Exporting;
}
export interface MatchingRules {
  rule: string[];
}
export interface RuleBasedMatching {
  enabled: boolean;
  max_allowed_rule_level_for_matching?: number;
  max_allowed_rule_level_for_merging?: number;
  attribute_types_selector: AttributeTypesSelector;
  conflict_resolution: ConflictResolution;
  exporting_config: ExportingConfig;
  matching_rules: MatchingRules;
}
export interface AwsCustomerprofilesDomainArgs {
  dead_letter_queue_url?: string;
  default_encryption_key?: string;
  default_expiration_days: number;
  domain_name: string;
  tags?: {
    [key: string]: string;
  };
  matching: Matching;
  rule_based_matching: RuleBasedMatching;
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