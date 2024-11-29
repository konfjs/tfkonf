import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsElasticacheClusterArgsLogDeliveryConfiguration {
  destination: string;
  destination_type: string;
  log_format: string;
  log_type: string;
}
export interface AwsElasticacheClusterArgs {
  auto_minor_version_upgrade?: string;
  cluster_id: string;
  final_snapshot_identifier?: string;
  notification_topic_arn?: string;
  outpost_mode?: string;
  preferred_availability_zones?: string[];
  snapshot_arns?: string[];
  snapshot_name?: string;
  snapshot_retention_limit?: number;
  tags?: {
    [key: string]: string;
  };
  log_delivery_configuration: AwsElasticacheClusterArgsLogDeliveryConfiguration;
}
export class aws_elasticache_cluster extends TerraformResource {
  readonly apply_immediately?: boolean;
  readonly arn!: string;
  readonly availability_zone?: string;
  readonly az_mode?: string;
  readonly cache_nodes!: any[];
  readonly cluster_address!: string;
  readonly configuration_endpoint!: string;
  readonly engine?: string;
  readonly engine_version?: string;
  readonly engine_version_actual!: string;
  readonly id?: string;
  readonly ip_discovery?: string;
  readonly maintenance_window?: string;
  readonly network_type?: string;
  readonly node_type?: string;
  readonly num_cache_nodes?: number;
  readonly parameter_group_name?: string;
  readonly port?: number;
  readonly preferred_outpost_arn?: string;
  readonly replication_group_id?: string;
  readonly security_group_ids?: string[];
  readonly snapshot_window?: string;
  readonly subnet_group_name?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly transit_encryption_enabled?: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticacheClusterArgs) {
    super(config, "resource", args, resourceName, "aws_elasticache_cluster");
  }
}