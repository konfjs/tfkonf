import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleGkeonpremVmwareNodePoolArgsconfigtaints {
  effect?: string;
  key: string;
  value: string;
}
export interface GoogleGkeonpremVmwareNodePoolArgsconfigVsphereConfigtags {
  category?: string;
  tag?: string;
}
export interface GoogleGkeonpremVmwareNodePoolArgsconfigVsphereConfig {
  datastore?: string;
  host_groups?: string[];
  tags: GoogleGkeonpremVmwareNodePoolArgsconfigVsphereConfigtags;
}
export interface GoogleGkeonpremVmwareNodePoolArgsconfig {
  boot_disk_size_gb?: number;
  cpus?: number;
  enable_load_balancer?: boolean;
  image?: string;
  image_type: string;
  memory_mb?: number;
  replicas?: number;
  taints: GoogleGkeonpremVmwareNodePoolArgsconfigtaints;
  vsphere_config: GoogleGkeonpremVmwareNodePoolArgsconfigVsphereConfig;
}
export interface GoogleGkeonpremVmwareNodePoolArgsNodePoolAutoscaling {
  max_replicas: number;
  min_replicas: number;
}
export interface GoogleGkeonpremVmwareNodePoolArgstimeouts {
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
  config: GoogleGkeonpremVmwareNodePoolArgsconfig;
  node_pool_autoscaling: GoogleGkeonpremVmwareNodePoolArgsNodePoolAutoscaling;
  timeouts: GoogleGkeonpremVmwareNodePoolArgstimeouts;
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