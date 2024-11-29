import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleContainerAwsNodePoolArgsautoscaling {
  max_node_count: number;
  min_node_count: number;
}
export interface GoogleContainerAwsNodePoolArgsconfigAutoscalingMetricsCollection {
  granularity: string;
  metrics?: string[];
}
export interface GoogleContainerAwsNodePoolArgsconfigConfigEncryption {
  kms_key_arn: string;
}
export interface GoogleContainerAwsNodePoolArgsconfigProxyConfig {
  secret_arn: string;
  secret_version: string;
}
export interface GoogleContainerAwsNodePoolArgsconfigRootVolume {
  kms_key_arn?: string;
}
export interface GoogleContainerAwsNodePoolArgsconfigSshConfig {
  ec2_key_pair: string;
}
export interface GoogleContainerAwsNodePoolArgsconfigtaints {
  effect: string;
  key: string;
  value: string;
}
export interface GoogleContainerAwsNodePoolArgsconfig {
  iam_instance_profile: string;
  labels?: {
    [key: string]: string;
  };
  security_group_ids?: string[];
  tags?: {
    [key: string]: string;
  };
  autoscaling_metrics_collection: GoogleContainerAwsNodePoolArgsconfigAutoscalingMetricsCollection;
  config_encryption: GoogleContainerAwsNodePoolArgsconfigConfigEncryption;
  proxy_config: GoogleContainerAwsNodePoolArgsconfigProxyConfig;
  root_volume: GoogleContainerAwsNodePoolArgsconfigRootVolume;
  ssh_config: GoogleContainerAwsNodePoolArgsconfigSshConfig;
  taints: GoogleContainerAwsNodePoolArgsconfigtaints;
}
export interface GoogleContainerAwsNodePoolArgsKubeletConfig {
  cpu_cfs_quota_period?: string;
  pod_pids_limit?: number;
}
export interface GoogleContainerAwsNodePoolArgsmanagement {}
export interface GoogleContainerAwsNodePoolArgsMaxPodsConstraint {
  max_pods_per_node: number;
}
export interface GoogleContainerAwsNodePoolArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleContainerAwsNodePoolArgsUpdateSettingsSurgeSettings {}
export interface GoogleContainerAwsNodePoolArgsUpdateSettings {
  surge_settings: GoogleContainerAwsNodePoolArgsUpdateSettingsSurgeSettings;
}
export interface GoogleContainerAwsNodePoolArgs {
  annotations?: {
    [key: string]: string;
  };
  cluster: string;
  location: string;
  name: string;
  subnet_id: string;
  version: string;
  autoscaling: GoogleContainerAwsNodePoolArgsautoscaling;
  config: GoogleContainerAwsNodePoolArgsconfig;
  kubelet_config: GoogleContainerAwsNodePoolArgsKubeletConfig;
  management: GoogleContainerAwsNodePoolArgsmanagement;
  max_pods_constraint: GoogleContainerAwsNodePoolArgsMaxPodsConstraint;
  timeouts: GoogleContainerAwsNodePoolArgstimeouts;
  update_settings: GoogleContainerAwsNodePoolArgsUpdateSettings;
}
export class google_container_aws_node_pool extends TerraformResource {
  readonly create_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly reconciling!: boolean;
  readonly state!: string;
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleContainerAwsNodePoolArgs) {
    super(config, "resource", args, resourceName, "google_container_aws_node_pool");
  }
}