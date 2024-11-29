import { TerraformConfig, TerraformResource } from "tfs";
export interface Autoclass {
  enabled: boolean;
}
export interface Cors {
  max_age_seconds?: number;
  method?: string[];
  origin?: string[];
  response_header?: string[];
}
export interface CustomPlacementConfig {
  data_locations: string[];
}
export interface Encryption {
  default_kms_key_name: string;
}
export interface HierarchicalNamespace {
  enabled: boolean;
}
export interface Action {
  storage_class?: string;
  type: string;
}
export interface Condition {
  age?: number;
  created_before?: string;
  custom_time_before?: string;
  days_since_custom_time?: number;
  days_since_noncurrent_time?: number;
  matches_prefix?: string[];
  matches_storage_class?: string[];
  matches_suffix?: string[];
  noncurrent_time_before?: string;
  num_newer_versions?: number;
  send_age_if_zero?: boolean;
  send_days_since_custom_time_if_zero?: boolean;
  send_days_since_noncurrent_time_if_zero?: boolean;
  send_num_newer_versions_if_zero?: boolean;
}
export interface LifecycleRule {
  action: Action;
  condition: Condition;
}
export interface Logging {
  log_bucket: string;
}
export interface RetentionPolicy {
  is_locked?: boolean;
  retention_period: number;
}
export interface SoftDeletePolicy {
  retention_duration_seconds?: number;
}
export interface Timeouts {
  create?: string;
  read?: string;
  update?: string;
}
export interface Versioning {
  enabled: boolean;
}
export interface Website {
  main_page_suffix?: string;
  not_found_page?: string;
}
export interface GoogleStorageBucketArgs {
  default_event_based_hold?: boolean;
  enable_object_retention?: boolean;
  force_destroy?: boolean;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  requester_pays?: boolean;
  storage_class?: string;
  autoclass: Autoclass;
  cors: Cors;
  custom_placement_config: CustomPlacementConfig;
  encryption: Encryption;
  hierarchical_namespace: HierarchicalNamespace;
  lifecycle_rule: LifecycleRule;
  logging: Logging;
  retention_policy: RetentionPolicy;
  soft_delete_policy: SoftDeletePolicy;
  timeouts: Timeouts;
  versioning: Versioning;
  website: Website;
}
export class google_storage_bucket extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly project_number!: number;
  readonly public_access_prevention?: string;
  readonly rpo?: string;
  readonly self_link!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uniform_bucket_level_access?: boolean;
  readonly url!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageBucketArgs) {
    super(config, "resource", args, resourceName, "google_storage_bucket");
  }
}