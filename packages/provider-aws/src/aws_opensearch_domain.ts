import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsOpensearchDomainArgsAdvancedSecurityOptionsMasterUserOptions {
  master_user_arn?: string;
  master_user_name?: string;
  master_user_password?: string;
}
export interface AwsOpensearchDomainArgsAdvancedSecurityOptions {
  enabled: boolean;
  internal_user_database_enabled?: boolean;
  master_user_options: AwsOpensearchDomainArgsAdvancedSecurityOptionsMasterUserOptions;
}
export interface AwsOpensearchDomainArgsAutoTuneOptionsMaintenanceScheduleDuration {
  unit: string;
  value: number;
}
export interface AwsOpensearchDomainArgsAutoTuneOptionsMaintenanceSchedule {
  cron_expression_for_recurrence: string;
  start_at: string;
  duration: AwsOpensearchDomainArgsAutoTuneOptionsMaintenanceScheduleDuration;
}
export interface AwsOpensearchDomainArgsAutoTuneOptions {
  desired_state: string;
  use_off_peak_window?: boolean;
  maintenance_schedule: AwsOpensearchDomainArgsAutoTuneOptionsMaintenanceSchedule;
}
export interface AwsOpensearchDomainArgsClusterConfigColdStorageOptions {}
export interface AwsOpensearchDomainArgsClusterConfigZoneAwarenessConfig {
  availability_zone_count?: number;
}
export interface AwsOpensearchDomainArgsClusterConfig {
  dedicated_master_count?: number;
  dedicated_master_enabled?: boolean;
  dedicated_master_type?: string;
  instance_count?: number;
  instance_type?: string;
  multi_az_with_standby_enabled?: boolean;
  warm_count?: number;
  warm_enabled?: boolean;
  warm_type?: string;
  zone_awareness_enabled?: boolean;
  cold_storage_options: AwsOpensearchDomainArgsClusterConfigColdStorageOptions;
  zone_awareness_config: AwsOpensearchDomainArgsClusterConfigZoneAwarenessConfig;
}
export interface AwsOpensearchDomainArgsCognitoOptions {
  enabled?: boolean;
  identity_pool_id: string;
  role_arn: string;
  user_pool_id: string;
}
export interface AwsOpensearchDomainArgsDomainEndpointOptions {
  custom_endpoint?: string;
  custom_endpoint_certificate_arn?: string;
  custom_endpoint_enabled?: boolean;
  enforce_https?: boolean;
}
export interface AwsOpensearchDomainArgsEbsOptions {
  ebs_enabled: boolean;
  volume_size?: number;
}
export interface AwsOpensearchDomainArgsEncryptAtRest {
  enabled: boolean;
}
export interface AwsOpensearchDomainArgsLogPublishingOptions {
  cloudwatch_log_group_arn: string;
  enabled?: boolean;
  log_type: string;
}
export interface AwsOpensearchDomainArgsNodeToNodeEncryption {
  enabled: boolean;
}
export interface AwsOpensearchDomainArgsOffPeakWindowOptionsOffPeakWindowWindowStartTime {}
export interface AwsOpensearchDomainArgsOffPeakWindowOptionsOffPeakWindow {
  window_start_time: AwsOpensearchDomainArgsOffPeakWindowOptionsOffPeakWindowWindowStartTime;
}
export interface AwsOpensearchDomainArgsOffPeakWindowOptions {
  off_peak_window: AwsOpensearchDomainArgsOffPeakWindowOptionsOffPeakWindow;
}
export interface AwsOpensearchDomainArgsSnapshotOptions {
  automated_snapshot_start_hour: number;
}
export interface AwsOpensearchDomainArgsSoftwareUpdateOptions {}
export interface AwsOpensearchDomainArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsOpensearchDomainArgsVpcOptions {
  security_group_ids?: string[];
  subnet_ids?: string[];
}
export interface AwsOpensearchDomainArgs {
  domain_name: string;
  tags?: {
    [key: string]: string;
  };
  advanced_security_options: AwsOpensearchDomainArgsAdvancedSecurityOptions;
  auto_tune_options: AwsOpensearchDomainArgsAutoTuneOptions;
  cluster_config: AwsOpensearchDomainArgsClusterConfig;
  cognito_options: AwsOpensearchDomainArgsCognitoOptions;
  domain_endpoint_options: AwsOpensearchDomainArgsDomainEndpointOptions;
  ebs_options: AwsOpensearchDomainArgsEbsOptions;
  encrypt_at_rest: AwsOpensearchDomainArgsEncryptAtRest;
  log_publishing_options: AwsOpensearchDomainArgsLogPublishingOptions;
  node_to_node_encryption: AwsOpensearchDomainArgsNodeToNodeEncryption;
  off_peak_window_options: AwsOpensearchDomainArgsOffPeakWindowOptions;
  snapshot_options: AwsOpensearchDomainArgsSnapshotOptions;
  software_update_options: AwsOpensearchDomainArgsSoftwareUpdateOptions;
  timeouts?: AwsOpensearchDomainArgsTimeouts;
  vpc_options: AwsOpensearchDomainArgsVpcOptions;
}
export class aws_opensearch_domain extends TerraformResource {
  readonly access_policies?: string;
  readonly advanced_options?: {
    [key: string]: string;
  };
  readonly arn!: string;
  readonly dashboard_endpoint!: string;
  readonly dashboard_endpoint_v2!: string;
  readonly domain_endpoint_v2_hosted_zone_id!: string;
  readonly domain_id!: string;
  readonly endpoint!: string;
  readonly endpoint_v2!: string;
  readonly engine_version?: string;
  readonly id?: string;
  readonly ip_address_type?: string;
  readonly kibana_endpoint!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchDomainArgs) {
    super(config, "resource", args, resourceName, "aws_opensearch_domain");
  }
}