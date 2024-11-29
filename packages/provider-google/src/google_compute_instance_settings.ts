import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeInstanceSettingsArgsmetadata {
  items?: {
    [key: string]: string;
  };
}
export interface GoogleComputeInstanceSettingsArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeInstanceSettingsArgs {
  zone: string;
  metadata: GoogleComputeInstanceSettingsArgsmetadata;
  timeouts: GoogleComputeInstanceSettingsArgstimeouts;
}
export class google_compute_instance_settings extends TerraformResource {
  readonly fingerprint!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeInstanceSettingsArgs) {
    super(config, "resource", args, resourceName, "google_compute_instance_settings");
  }
}