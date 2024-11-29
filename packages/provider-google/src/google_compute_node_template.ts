import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeNodeTemplateArgsAccelerators {
  accelerator_count?: number;
  accelerator_type?: string;
}
export interface GoogleComputeNodeTemplateArgsDisks {
  disk_count?: number;
  disk_size_gb?: number;
  disk_type?: string;
}
export interface GoogleComputeNodeTemplateArgsNodeTypeFlexibility {
  cpus?: string;
  memory?: string;
}
export interface GoogleComputeNodeTemplateArgsServerBinding {
  type: string;
}
export interface GoogleComputeNodeTemplateArgsTimeouts {
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
  accelerators: GoogleComputeNodeTemplateArgsAccelerators;
  disks: GoogleComputeNodeTemplateArgsDisks;
  node_type_flexibility: GoogleComputeNodeTemplateArgsNodeTypeFlexibility;
  server_binding: GoogleComputeNodeTemplateArgsServerBinding;
  timeouts: GoogleComputeNodeTemplateArgsTimeouts;
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