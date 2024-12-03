import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleGkeonpremBareMetalNodePoolArgsNodePoolConfigNodeConfigs {
  labels?: {
    [key: string]: string;
  };
  node_ip?: string;
}
export interface GoogleGkeonpremBareMetalNodePoolArgsNodePoolConfigTaints {
  effect?: string;
  key?: string;
  value?: string;
}
export interface GoogleGkeonpremBareMetalNodePoolArgsNodePoolConfig {
  node_configs: GoogleGkeonpremBareMetalNodePoolArgsNodePoolConfigNodeConfigs;
  taints: GoogleGkeonpremBareMetalNodePoolArgsNodePoolConfigTaints;
}
export interface GoogleGkeonpremBareMetalNodePoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeonpremBareMetalNodePoolArgs {
  annotations?: {
    [key: string]: string;
  };
  bare_metal_cluster: string;
  display_name?: string;
  location: string;
  name: string;
  node_pool_config: GoogleGkeonpremBareMetalNodePoolArgsNodePoolConfig;
  timeouts?: GoogleGkeonpremBareMetalNodePoolArgsTimeouts;
}
export class google_gkeonprem_bare_metal_node_pool extends TerraformResource {
  readonly create_time!: string;
  readonly delete_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly reconciling!: boolean;
  readonly state!: string;
  readonly status!: any[];
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeonpremBareMetalNodePoolArgs) {
    super(config, "resource", args, resourceName, "google_gkeonprem_bare_metal_node_pool");
  }
}