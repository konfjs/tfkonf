import { TerraformConfig, TerraformResource } from "tfs";
export interface Autoscaling {
  max_node_count: number;
  min_node_count: number;
}
export interface ProxyConfig {
  resource_group_id: string;
  secret_id: string;
}
export interface RootVolume {}
export interface SshConfig {
  authorized_key: string;
}
export interface Config {
  labels?: {
    [key: string]: string;
  };
  tags?: {
    [key: string]: string;
  };
  proxy_config: ProxyConfig;
  root_volume: RootVolume;
  ssh_config: SshConfig;
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
export interface GoogleContainerAzureNodePoolArgs {
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
  management: Management;
  max_pods_constraint: MaxPodsConstraint;
  timeouts: Timeouts;
}
export class google_container_azure_node_pool extends TerraformResource {
  readonly azure_availability_zone?: string;
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
  constructor(config: TerraformConfig, resourceName: string, args: GoogleContainerAzureNodePoolArgs) {
    super(config, "resource", args, resourceName, "google_container_azure_node_pool");
  }
}