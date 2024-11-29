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
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVmwareengineClusterArgs {
  name: string;
  parent: string;
  autoscaling_settings: AutoscalingSettings;
  node_type_configs: NodeTypeConfigs;
  timeouts: Timeouts;
}
export class google_vmwareengine_cluster extends TerraformResource {
  readonly id?: string;
  readonly management!: boolean;
  readonly state!: string;
  readonly uid!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVmwareengineClusterArgs) {
    super(config, "resource", args, resourceName, "google_vmwareengine_cluster");
  }
}