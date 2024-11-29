import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsElasticacheReplicationGroupArgsLogDeliveryConfiguration {
  destination: string;
  destination_type: string;
  log_format: string;
  log_type: string;
}
export interface AwsElasticacheReplicationGroupArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsElasticacheReplicationGroupArgs {
  auth_token?: string;
  auth_token_update_strategy?: string;
  automatic_failover_enabled?: boolean;
  description: string;
  engine?: string;
  final_snapshot_identifier?: string;
  kms_key_id?: string;
  multi_az_enabled?: boolean;
  notification_topic_arn?: string;
  port?: number;
  preferred_cache_cluster_azs?: string[];
  replication_group_id: string;
  snapshot_arns?: string[];
  snapshot_name?: string;
  snapshot_retention_limit?: number;
  tags?: {
    [key: string]: string;
  };
  user_group_ids?: string[];
  log_delivery_configuration: AwsElasticacheReplicationGroupArgsLogDeliveryConfiguration;
  timeouts: AwsElasticacheReplicationGroupArgstimeouts;
}
export class aws_elasticache_replication_group extends TerraformResource {
  readonly apply_immediately?: boolean;
  readonly arn!: string;
  readonly at_rest_encryption_enabled?: boolean;
  readonly auto_minor_version_upgrade?: string;
  readonly cluster_enabled!: boolean;
  readonly cluster_mode?: string;
  readonly configuration_endpoint_address!: string;
  readonly data_tiering_enabled?: boolean;
  readonly engine_version?: string;
  readonly engine_version_actual!: string;
  readonly global_replication_group_id?: string;
  readonly id?: string;
  readonly ip_discovery?: string;
  readonly maintenance_window?: string;
  readonly member_clusters!: string[];
  readonly network_type?: string;
  readonly node_type?: string;
  readonly num_cache_clusters?: number;
  readonly num_node_groups?: number;
  readonly parameter_group_name?: string;
  readonly primary_endpoint_address!: string;
  readonly reader_endpoint_address!: string;
  readonly replicas_per_node_group?: number;
  readonly security_group_ids?: string[];
  readonly security_group_names?: string[];
  readonly snapshot_window?: string;
  readonly subnet_group_name?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly transit_encryption_enabled?: boolean;
  readonly transit_encryption_mode?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticacheReplicationGroupArgs) {
    super(config, "resource", args, resourceName, "aws_elasticache_replication_group");
  }
}