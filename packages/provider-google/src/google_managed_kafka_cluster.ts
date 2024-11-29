import { TerraformConfig, TerraformResource } from "tfs";
export interface CapacityConfig {
  memory_bytes: string;
  vcpu_count: string;
}
export interface NetworkConfigs {
  subnet: string;
}
export interface AccessConfig {
  network_configs: NetworkConfigs;
}
export interface GcpConfig {
  kms_key?: string;
  access_config: AccessConfig;
}
export interface RebalanceConfig {
  mode?: string;
}
export interface Timeouts {
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
  capacity_config: CapacityConfig;
  gcp_config: GcpConfig;
  rebalance_config: RebalanceConfig;
  timeouts: Timeouts;
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