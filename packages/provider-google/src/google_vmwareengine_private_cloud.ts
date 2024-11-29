import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds {
  scale_in: number;
  scale_out: number;
}
export interface GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds {
  scale_in: number;
  scale_out: number;
}
export interface GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds {
  scale_in: number;
  scale_out: number;
}
export interface GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPolicies {
  autoscale_policy_id: string;
  node_type_id: string;
  scale_out_size: number;
  consumed_memory_thresholds: GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds;
  cpu_thresholds: GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds;
  storage_thresholds: GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds;
}
export interface GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettings {
  cool_down_period?: string;
  max_cluster_node_count?: number;
  min_cluster_node_count?: number;
  autoscaling_policies: GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPolicies;
}
export interface GoogleVmwareenginePrivateCloudArgsManagementClusterNodeTypeConfigs {
  custom_core_count?: number;
  node_count: number;
  node_type_id: string;
}
export interface GoogleVmwareenginePrivateCloudArgsManagementClusterStretchedClusterConfig {
  preferred_location?: string;
  secondary_location?: string;
}
export interface GoogleVmwareenginePrivateCloudArgsManagementCluster {
  cluster_id: string;
  autoscaling_settings: GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettings;
  node_type_configs: GoogleVmwareenginePrivateCloudArgsManagementClusterNodeTypeConfigs;
  stretched_cluster_config: GoogleVmwareenginePrivateCloudArgsManagementClusterStretchedClusterConfig;
}
export interface GoogleVmwareenginePrivateCloudArgsNetworkConfig {
  management_cidr: string;
  vmware_engine_network?: string;
}
export interface GoogleVmwareenginePrivateCloudArgstimeouts {
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
  management_cluster: GoogleVmwareenginePrivateCloudArgsManagementCluster;
  network_config: GoogleVmwareenginePrivateCloudArgsNetworkConfig;
  timeouts: GoogleVmwareenginePrivateCloudArgstimeouts;
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