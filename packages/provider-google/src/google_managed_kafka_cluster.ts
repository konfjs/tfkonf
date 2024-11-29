import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleManagedKafkaClusterArgsCapacityConfig {
  memory_bytes: string;
  vcpu_count: string;
}
export interface GoogleManagedKafkaClusterArgsGcpConfigAccessConfigNetworkConfigs {
  subnet: string;
}
export interface GoogleManagedKafkaClusterArgsGcpConfigAccessConfig {
  network_configs: GoogleManagedKafkaClusterArgsGcpConfigAccessConfigNetworkConfigs;
}
export interface GoogleManagedKafkaClusterArgsGcpConfig {
  kms_key?: string;
  access_config: GoogleManagedKafkaClusterArgsGcpConfigAccessConfig;
}
export interface GoogleManagedKafkaClusterArgsRebalanceConfig {
  mode?: string;
}
export interface GoogleManagedKafkaClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleManagedKafkaClusterArgs {
  cluster_id: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  capacity_config: GoogleManagedKafkaClusterArgsCapacityConfig;
  gcp_config: GoogleManagedKafkaClusterArgsGcpConfig;
  rebalance_config: GoogleManagedKafkaClusterArgsRebalanceConfig;
  timeouts?: GoogleManagedKafkaClusterArgsTimeouts;
}
export class google_managed_kafka_cluster extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleManagedKafkaClusterArgs) {
    super(config, "resource", args, resourceName, "google_managed_kafka_cluster");
  }
}