import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeInstanceSettingsArgsMetadata {
  items?: {
    [key: string]: string;
  };
}
export interface GoogleComputeInstanceSettingsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeInstanceSettingsArgs {
  zone: string;
  metadata: GoogleComputeInstanceSettingsArgsMetadata;
  timeouts?: GoogleComputeInstanceSettingsArgsTimeouts;
}
export class google_compute_instance_settings extends TerraformResource {
  readonly fingerprint!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeInstanceSettingsArgs) {
    super(config, "resource", args, resourceName, "google_compute_instance_settings");
  }
}