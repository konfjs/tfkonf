import { TerraformConfig, TerraformResource } from "tfs";
export interface MasterUserOptions {
  master_user_arn?: string;
  master_user_name?: string;
  master_user_password?: string;
}
export interface AdvancedSecurityOptions {
  enabled: boolean;
  internal_user_database_enabled?: boolean;
  master_user_options: MasterUserOptions;
}
export interface Duration {
  unit: string;
  value: number;
}
export interface MaintenanceSchedule {
  cron_expression_for_recurrence: string;
  start_at: string;
  duration: Duration;
}
export interface AutoTuneOptions {
  desired_state: string;
  maintenance_schedule: MaintenanceSchedule;
}
export interface ColdStorageOptions {}
export interface ZoneAwarenessConfig {
  availability_zone_count?: number;
}
export interface ClusterConfig {
  dedicated_master_count?: number;
  dedicated_master_enabled?: boolean;
  dedicated_master_type?: string;
  instance_count?: number;
  instance_type?: string;
  warm_count?: number;
  warm_enabled?: boolean;
  warm_type?: string;
  zone_awareness_enabled?: boolean;
  cold_storage_options: ColdStorageOptions;
  zone_awareness_config: ZoneAwarenessConfig;
}
export interface CognitoOptions {
  enabled?: boolean;
  identity_pool_id: string;
  role_arn: string;
  user_pool_id: string;
}
export interface DomainEndpointOptions {
  custom_endpoint?: string;
  custom_endpoint_certificate_arn?: string;
  custom_endpoint_enabled?: boolean;
  enforce_https?: boolean;
}
export interface EbsOptions {
  ebs_enabled: boolean;
  volume_size?: number;
}
export interface EncryptAtRest {
  enabled: boolean;
}
export interface LogPublishingOptions {
  cloudwatch_log_group_arn: string;
  enabled?: boolean;
  log_type: string;
}
export interface NodeToNodeEncryption {
  enabled: boolean;
}
export interface SnapshotOptions {
  automated_snapshot_start_hour: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface VpcOptions {
  security_group_ids?: string[];
  subnet_ids?: string[];
}
export interface AwsElasticsearchDomainArgs {
  domain_name: string;
  elasticsearch_version?: string;
  tags?: {
    [key: string]: string;
  };
  advanced_security_options: AdvancedSecurityOptions;
  auto_tune_options: AutoTuneOptions;
  cluster_config: ClusterConfig;
  cognito_options: CognitoOptions;
  domain_endpoint_options: DomainEndpointOptions;
  ebs_options: EbsOptions;
  encrypt_at_rest: EncryptAtRest;
  log_publishing_options: LogPublishingOptions;
  node_to_node_encryption: NodeToNodeEncryption;
  snapshot_options: SnapshotOptions;
  timeouts: Timeouts;
  vpc_options: VpcOptions;
}
export class aws_elasticsearch_domain extends TerraformResource {
  readonly access_policies?: string;
  readonly advanced_options?: {
    [key: string]: string;
  };
  readonly arn!: string;
  readonly domain_id!: string;
  readonly endpoint!: string;
  readonly id?: string;
  readonly kibana_endpoint!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticsearchDomainArgs) {
    super(config, "resource", args, resourceName, "aws_elasticsearch_domain");
  }
}