import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDbInstanceArgsBlueGreenUpdate {
  enabled?: boolean;
}
export interface AwsDbInstanceArgsRestoreToPointInTime {
  restore_time?: string;
  source_db_instance_automated_backups_arn?: string;
  source_db_instance_identifier?: string;
  source_dbi_resource_id?: string;
  use_latest_restorable_time?: boolean;
}
export interface AwsDbInstanceArgsS3Import {
  bucket_name: string;
  bucket_prefix?: string;
  ingestion_role: string;
  source_engine: string;
  source_engine_version: string;
}
export interface AwsDbInstanceArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDbInstanceArgs {
  allow_major_version_upgrade?: boolean;
  apply_immediately?: boolean;
  auto_minor_version_upgrade?: boolean;
  copy_tags_to_snapshot?: boolean;
  custom_iam_instance_profile?: string;
  customer_owned_ip_enabled?: boolean;
  dedicated_log_volume?: boolean;
  delete_automated_backups?: boolean;
  deletion_protection?: boolean;
  domain?: string;
  domain_auth_secret_arn?: string;
  domain_dns_ips?: string[];
  domain_iam_role_name?: string;
  domain_ou?: string;
  enabled_cloudwatch_logs_exports?: string[];
  final_snapshot_identifier?: string;
  iam_database_authentication_enabled?: boolean;
  instance_class: string;
  manage_master_user_password?: boolean;
  max_allocated_storage?: number;
  monitoring_interval?: number;
  password?: string;
  performance_insights_enabled?: boolean;
  publicly_accessible?: boolean;
  replicate_source_db?: string;
  skip_final_snapshot?: boolean;
  storage_encrypted?: boolean;
  tags?: {
    [key: string]: string;
  };
  upgrade_storage_config?: boolean;
  blue_green_update: AwsDbInstanceArgsBlueGreenUpdate;
  restore_to_point_in_time: AwsDbInstanceArgsRestoreToPointInTime;
  s3_import: AwsDbInstanceArgsS3Import;
  timeouts: AwsDbInstanceArgstimeouts;
}
export class aws_db_instance extends TerraformResource {
  readonly address!: string;
  readonly allocated_storage?: number;
  readonly arn!: string;
  readonly availability_zone?: string;
  readonly backup_retention_period?: number;
  readonly backup_target?: string;
  readonly backup_window?: string;
  readonly ca_cert_identifier?: string;
  readonly character_set_name?: string;
  readonly db_name?: string;
  readonly db_subnet_group_name?: string;
  readonly domain_fqdn?: string;
  readonly endpoint!: string;
  readonly engine?: string;
  readonly engine_lifecycle_support?: string;
  readonly engine_version?: string;
  readonly engine_version_actual!: string;
  readonly hosted_zone_id!: string;
  readonly id?: string;
  readonly identifier?: string;
  readonly identifier_prefix?: string;
  readonly iops?: number;
  readonly kms_key_id?: string;
  readonly latest_restorable_time!: string;
  readonly license_model?: string;
  readonly listener_endpoint!: any[];
  readonly maintenance_window?: string;
  readonly master_user_secret!: any[];
  readonly master_user_secret_kms_key_id?: string;
  readonly monitoring_role_arn?: string;
  readonly multi_az?: boolean;
  readonly nchar_character_set_name?: string;
  readonly network_type?: string;
  readonly option_group_name?: string;
  readonly parameter_group_name?: string;
  readonly performance_insights_kms_key_id?: string;
  readonly performance_insights_retention_period?: number;
  readonly port?: number;
  readonly replica_mode?: string;
  readonly replicas!: string[];
  readonly resource_id!: string;
  readonly snapshot_identifier?: string;
  readonly status!: string;
  readonly storage_throughput?: number;
  readonly storage_type?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly timezone?: string;
  readonly username?: string;
  readonly vpc_security_group_ids?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsDbInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_db_instance");
  }
}