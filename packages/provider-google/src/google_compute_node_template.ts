import { TerraformConfig, TerraformResource } from "tfs";
export interface Accelerators {
  accelerator_count?: number;
  accelerator_type?: string;
}
export interface Disks {
  disk_count?: number;
  disk_size_gb?: number;
  disk_type?: string;
}
export interface NodeTypeFlexibility {
  cpus?: string;
  memory?: string;
}
export interface ServerBinding {
  type: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeNodeTemplateArgs {
  cpu_overcommit_type?: string;
  description?: string;
  name?: string;
  node_affinity_labels?: {
    [key: string]: string;
  };
  node_type?: string;
  accelerators: Accelerators;
  disks: Disks;
  node_type_flexibility: NodeTypeFlexibility;
  server_binding: ServerBinding;
  timeouts: Timeouts;
}
export class google_compute_node_template extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeNodeTemplateArgs) {
    super(config, "resource", args, resourceName, "google_compute_node_template");
  }
}