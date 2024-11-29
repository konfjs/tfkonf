import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleEdgecontainerNodePoolArgsLocalDiskEncryption {
  kms_key?: string;
}
export interface GoogleEdgecontainerNodePoolArgsNodeConfig {}
export interface GoogleEdgecontainerNodePoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleEdgecontainerNodePoolArgs {
  cluster: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  node_count: number;
  node_location: string;
  local_disk_encryption: GoogleEdgecontainerNodePoolArgsLocalDiskEncryption;
  node_config: GoogleEdgecontainerNodePoolArgsNodeConfig;
  timeouts: GoogleEdgecontainerNodePoolArgsTimeouts;
}
export class google_edgecontainer_node_pool extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly machine_filter?: string;
  readonly node_version!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleEdgecontainerNodePoolArgs) {
    super(config, "resource", args, resourceName, "google_edgecontainer_node_pool");
  }
}