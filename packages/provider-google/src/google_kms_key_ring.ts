import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleKmsKeyRingArgs {
  location: string;
  name: string;
  timeouts: Timeouts;
}
export class google_kms_key_ring extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsKeyRingArgs) {
    super(config, "resource", args, resourceName, "google_kms_key_ring");
  }
}