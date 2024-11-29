import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds {
  scale_in: number;
  scale_out: number;
}
export interface GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPoliciesCpuThresholds {
  scale_in: number;
  scale_out: number;
}
export interface GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPoliciesStorageThresholds {
  scale_in: number;
  scale_out: number;
}
export interface GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPolicies {
  autoscale_policy_id: string;
  node_type_id: string;
  scale_out_size: number;
  consumed_memory_thresholds: GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds;
  cpu_thresholds: GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPoliciesCpuThresholds;
  storage_thresholds: GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPoliciesStorageThresholds;
}
export interface GoogleVmwareengineClusterArgsAutoscalingSettings {
  cool_down_period?: string;
  max_cluster_node_count?: number;
  min_cluster_node_count?: number;
  autoscaling_policies: GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPolicies;
}
export interface GoogleVmwareengineClusterArgsNodeTypeConfigs {
  custom_core_count?: number;
  node_count: number;
  node_type_id: string;
}
export interface GoogleVmwareengineClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVmwareengineClusterArgs {
  name: string;
  parent: string;
  autoscaling_settings: GoogleVmwareengineClusterArgsAutoscalingSettings;
  node_type_configs: GoogleVmwareengineClusterArgsNodeTypeConfigs;
  timeouts: GoogleVmwareengineClusterArgsTimeouts;
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