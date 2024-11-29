import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsFinspaceKxClusterArgsAutoScalingConfiguration {
  auto_scaling_metric: string;
  max_node_count: number;
  metric_target: number;
  min_node_count: number;
  scale_in_cooldown_seconds: number;
  scale_out_cooldown_seconds: number;
}
export interface AwsFinspaceKxClusterArgsCacheStorageConfigurations {
  size: number;
  type: string;
}
export interface AwsFinspaceKxClusterArgsCapacityConfiguration {
  node_count: number;
  node_type: string;
}
export interface AwsFinspaceKxClusterArgscode {
  s3_bucket: string;
  s3_key: string;
  s3_object_version?: string;
}
export interface AwsFinspaceKxClusterArgsdatabaseCacheConfigurations {
  cache_type: string;
  db_paths?: string[];
}
export interface AwsFinspaceKxClusterArgsdatabase {
  changeset_id?: string;
  database_name: string;
  dataview_name?: string;
  cache_configurations: AwsFinspaceKxClusterArgsdatabaseCacheConfigurations;
}
export interface AwsFinspaceKxClusterArgsSavedownStorageConfiguration {
  size?: number;
  type?: string;
  volume_name?: string;
}
export interface AwsFinspaceKxClusterArgsScalingGroupConfiguration {
  cpu?: number;
  memory_limit?: number;
  memory_reservation: number;
  node_count: number;
  scaling_group_name: string;
}
export interface AwsFinspaceKxClusterArgsTickerplantLogConfiguration {
  tickerplant_log_volumes: string[];
}
export interface AwsFinspaceKxClusterArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFinspaceKxClusterArgsVpcConfiguration {
  ip_address_type: string;
  security_group_ids: string[];
  subnet_ids: string[];
  vpc_id: string;
}
export interface AwsFinspaceKxClusterArgs {
  availability_zone_id?: string;
  az_mode: string;
  command_line_arguments?: {
    [key: string]: string;
  };
  description?: string;
  environment_id: string;
  execution_role?: string;
  initialization_script?: string;
  name: string;
  release_label: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
  auto_scaling_configuration: AwsFinspaceKxClusterArgsAutoScalingConfiguration;
  cache_storage_configurations: AwsFinspaceKxClusterArgsCacheStorageConfigurations;
  capacity_configuration: AwsFinspaceKxClusterArgsCapacityConfiguration;
  code: AwsFinspaceKxClusterArgscode;
  database: AwsFinspaceKxClusterArgsdatabase;
  savedown_storage_configuration: AwsFinspaceKxClusterArgsSavedownStorageConfiguration;
  scaling_group_configuration: AwsFinspaceKxClusterArgsScalingGroupConfiguration;
  tickerplant_log_configuration: AwsFinspaceKxClusterArgsTickerplantLogConfiguration;
  timeouts: AwsFinspaceKxClusterArgstimeouts;
  vpc_configuration: AwsFinspaceKxClusterArgsVpcConfiguration;
}
export class aws_finspace_kx_cluster extends TerraformResource {
  readonly arn!: string;
  readonly created_timestamp!: string;
  readonly id?: string;
  readonly last_modified_timestamp!: string;
  readonly status!: string;
  readonly status_reason!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsFinspaceKxClusterArgs) {
    super(config, "resource", args, resourceName, "aws_finspace_kx_cluster");
  }
}