import { TerraformConfig, TerraformResource } from "tfs";
export interface ConsumedMemoryThresholds {
  scale_in: number;
  scale_out: number;
}
export interface CpuThresholds {
  scale_in: number;
  scale_out: number;
}
export interface StorageThresholds {
  scale_in: number;
  scale_out: number;
}
export interface AutoscalingPolicies {
  autoscale_policy_id: string;
  node_type_id: string;
  scale_out_size: number;
  consumed_memory_thresholds: ConsumedMemoryThresholds;
  cpu_thresholds: CpuThresholds;
  storage_thresholds: StorageThresholds;
}
export interface AutoscalingSettings {
  cool_down_period?: string;
  max_cluster_node_count?: number;
  min_cluster_node_count?: number;
  autoscaling_policies: AutoscalingPolicies;
}
export interface NodeTypeConfigs {
  custom_core_count?: number;
  node_count: number;
  node_type_id: string;
}
export interface StretchedClusterConfig {
  preferred_location?: string;
  secondary_location?: string;
}
export interface ManagementCluster {
  cluster_id: string;
  autoscaling_settings: AutoscalingSettings;
  node_type_configs: NodeTypeConfigs;
  stretched_cluster_config: StretchedClusterConfig;
}
export interface NetworkConfig {
  management_cidr: string;
  vmware_engine_network?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVmwareenginePrivateCloudArgs {
  deletion_delay_hours?: number;
  description?: string;
  location: string;
  name: string;
  send_deletion_delay_hours_if_zero?: boolean;
  type?: string;
  management_cluster: ManagementCluster;
  network_config: NetworkConfig;
  timeouts: Timeouts;
}
export class google_vmwareengine_private_cloud extends TerraformResource {
  readonly hcx!: any[];
  readonly id?: string;
  readonly nsx!: any[];
  readonly project?: string;
  readonly state!: string;
  readonly uid!: string;
  readonly vcenter!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVmwareenginePrivateCloudArgs) {
    super(config, "resource", args, resourceName, "google_vmwareengine_private_cloud");
  }
}