import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleFilestoreSnapshotArgs {
  description?: string;
  instance: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  timeouts: Timeouts;
}
export class google_filestore_snapshot extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly filesystem_used_bytes!: string;
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFilestoreSnapshotArgs) {
    super(config, "resource", args, resourceName, "google_filestore_snapshot");
  }
}