import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleContainerAwsNodePoolArgsAutoscaling {
  max_node_count: number;
  min_node_count: number;
}
export interface GoogleContainerAwsNodePoolArgsConfigAutoscalingMetricsCollection {
  granularity: string;
  metrics?: string[];
}
export interface GoogleContainerAwsNodePoolArgsConfigConfigEncryption {
  kms_key_arn: string;
}
export interface GoogleContainerAwsNodePoolArgsConfigProxyConfig {
  secret_arn: string;
  secret_version: string;
}
export interface GoogleContainerAwsNodePoolArgsConfigRootVolume {
  kms_key_arn?: string;
}
export interface GoogleContainerAwsNodePoolArgsConfigSshConfig {
  ec2_key_pair: string;
}
export interface GoogleContainerAwsNodePoolArgsConfigTaints {
  effect: string;
  key: string;
  value: string;
}
export interface GoogleContainerAwsNodePoolArgsConfig {
  iam_instance_profile: string;
  labels?: {
    [key: string]: string;
  };
  security_group_ids?: string[];
  tags?: {
    [key: string]: string;
  };
  autoscaling_metrics_collection: GoogleContainerAwsNodePoolArgsConfigAutoscalingMetricsCollection;
  config_encryption: GoogleContainerAwsNodePoolArgsConfigConfigEncryption;
  proxy_config: GoogleContainerAwsNodePoolArgsConfigProxyConfig;
  root_volume: GoogleContainerAwsNodePoolArgsConfigRootVolume;
  ssh_config: GoogleContainerAwsNodePoolArgsConfigSshConfig;
  taints: GoogleContainerAwsNodePoolArgsConfigTaints;
}
export interface GoogleContainerAwsNodePoolArgsKubeletConfig {
  cpu_cfs_quota_period?: string;
  pod_pids_limit?: number;
}
export interface GoogleContainerAwsNodePoolArgsManagement {}
export interface GoogleContainerAwsNodePoolArgsMaxPodsConstraint {
  max_pods_per_node: number;
}
export interface GoogleContainerAwsNodePoolArgsTimeouts {
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
  autoscaling: GoogleContainerAwsNodePoolArgsAutoscaling;
  config: GoogleContainerAwsNodePoolArgsConfig;
  kubelet_config: GoogleContainerAwsNodePoolArgsKubeletConfig;
  management: GoogleContainerAwsNodePoolArgsManagement;
  max_pods_constraint: GoogleContainerAwsNodePoolArgsMaxPodsConstraint;
  timeouts?: GoogleContainerAwsNodePoolArgsTimeouts;
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