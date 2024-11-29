import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleContainerAzureNodePoolArgsAutoscaling {
  max_node_count: number;
  min_node_count: number;
}
export interface GoogleContainerAzureNodePoolArgsConfigProxyConfig {
  resource_group_id: string;
  secret_id: string;
}
export interface GoogleContainerAzureNodePoolArgsConfigRootVolume {}
export interface GoogleContainerAzureNodePoolArgsConfigSshConfig {
  authorized_key: string;
}
export interface GoogleContainerAzureNodePoolArgsConfig {
  labels?: {
    [key: string]: string;
  };
  tags?: {
    [key: string]: string;
  };
  proxy_config: GoogleContainerAzureNodePoolArgsConfigProxyConfig;
  root_volume: GoogleContainerAzureNodePoolArgsConfigRootVolume;
  ssh_config: GoogleContainerAzureNodePoolArgsConfigSshConfig;
}
export interface GoogleContainerAzureNodePoolArgsManagement {}
export interface GoogleContainerAzureNodePoolArgsMaxPodsConstraint {
  max_pods_per_node: number;
}
export interface GoogleContainerAzureNodePoolArgsTimeouts {
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
  autoscaling: GoogleContainerAzureNodePoolArgsAutoscaling;
  config: GoogleContainerAzureNodePoolArgsConfig;
  management: GoogleContainerAzureNodePoolArgsManagement;
  max_pods_constraint: GoogleContainerAzureNodePoolArgsMaxPodsConstraint;
  timeouts: GoogleContainerAzureNodePoolArgsTimeouts;
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