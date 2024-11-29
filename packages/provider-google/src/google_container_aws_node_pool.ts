import { TerraformConfig, TerraformResource } from "tfs";
export interface Autoscaling {
  max_node_count: number;
  min_node_count: number;
}
export interface AutoscalingMetricsCollection {
  granularity: string;
  metrics?: string[];
}
export interface ConfigEncryption {
  kms_key_arn: string;
}
export interface ProxyConfig {
  secret_arn: string;
  secret_version: string;
}
export interface RootVolume {
  kms_key_arn?: string;
}
export interface SshConfig {
  ec2_key_pair: string;
}
export interface Taints {
  effect: string;
  key: string;
  value: string;
}
export interface Config {
  iam_instance_profile: string;
  labels?: {
    [key: string]: string;
  };
  security_group_ids?: string[];
  tags?: {
    [key: string]: string;
  };
  autoscaling_metrics_collection: AutoscalingMetricsCollection;
  config_encryption: ConfigEncryption;
  proxy_config: ProxyConfig;
  root_volume: RootVolume;
  ssh_config: SshConfig;
  taints: Taints;
}
export interface KubeletConfig {
  cpu_cfs_quota_period?: string;
  pod_pids_limit?: number;
}
export interface Management {}
export interface MaxPodsConstraint {
  max_pods_per_node: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface SurgeSettings {}
export interface UpdateSettings {
  surge_settings: SurgeSettings;
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
  autoscaling: Autoscaling;
  config: Config;
  kubelet_config: KubeletConfig;
  management: Management;
  max_pods_constraint: MaxPodsConstraint;
  timeouts: Timeouts;
  update_settings: UpdateSettings;
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