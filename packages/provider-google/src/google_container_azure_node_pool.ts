import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleContainerAzureNodePoolArgsautoscaling {
  max_node_count: number;
  min_node_count: number;
}
export interface GoogleContainerAzureNodePoolArgsconfigProxyConfig {
  resource_group_id: string;
  secret_id: string;
}
export interface GoogleContainerAzureNodePoolArgsconfigRootVolume {}
export interface GoogleContainerAzureNodePoolArgsconfigSshConfig {
  authorized_key: string;
}
export interface GoogleContainerAzureNodePoolArgsconfig {
  labels?: {
    [key: string]: string;
  };
  tags?: {
    [key: string]: string;
  };
  proxy_config: GoogleContainerAzureNodePoolArgsconfigProxyConfig;
  root_volume: GoogleContainerAzureNodePoolArgsconfigRootVolume;
  ssh_config: GoogleContainerAzureNodePoolArgsconfigSshConfig;
}
export interface GoogleContainerAzureNodePoolArgsmanagement {}
export interface GoogleContainerAzureNodePoolArgsMaxPodsConstraint {
  max_pods_per_node: number;
}
export interface GoogleContainerAzureNodePoolArgstimeouts {
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
  autoscaling: GoogleContainerAzureNodePoolArgsautoscaling;
  config: GoogleContainerAzureNodePoolArgsconfig;
  management: GoogleContainerAzureNodePoolArgsmanagement;
  max_pods_constraint: GoogleContainerAzureNodePoolArgsMaxPodsConstraint;
  timeouts: GoogleContainerAzureNodePoolArgstimeouts;
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