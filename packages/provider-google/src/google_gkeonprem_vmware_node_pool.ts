import { TerraformConfig, TerraformResource } from "tfs";
export interface Taints {
  effect?: string;
  key: string;
  value: string;
}
export interface Tags {
  category?: string;
  tag?: string;
}
export interface VsphereConfig {
  datastore?: string;
  host_groups?: string[];
  tags: Tags;
}
export interface Config {
  boot_disk_size_gb?: number;
  cpus?: number;
  enable_load_balancer?: boolean;
  image?: string;
  image_type: string;
  memory_mb?: number;
  replicas?: number;
  taints: Taints;
  vsphere_config: VsphereConfig;
}
export interface NodePoolAutoscaling {
  max_replicas: number;
  min_replicas: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeonpremVmwareNodePoolArgs {
  annotations?: {
    [key: string]: string;
  };
  display_name?: string;
  location: string;
  name: string;
  vmware_cluster: string;
  config: Config;
  node_pool_autoscaling: NodePoolAutoscaling;
  timeouts: Timeouts;
}
export class google_gkeonprem_vmware_node_pool extends TerraformResource {
  readonly create_time!: string;
  readonly delete_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly on_prem_version!: string;
  readonly project?: string;
  readonly reconciling!: boolean;
  readonly state!: string;
  readonly status!: any[];
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeonpremVmwareNodePoolArgs) {
    super(config, "resource", args, resourceName, "google_gkeonprem_vmware_node_pool");
  }
}