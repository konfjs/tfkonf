import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeProjectMetadataArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeProjectMetadataArgs {
  metadata: {
    [key: string]: string;
  };
  timeouts: GoogleComputeProjectMetadataArgsTimeouts;
}
export class google_compute_project_metadata extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeProjectMetadataArgs) {
    super(config, "resource", args, resourceName, "google_compute_project_metadata");
  }
}