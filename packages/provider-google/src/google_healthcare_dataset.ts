import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleHealthcareDatasetArgsEncryptionSpec {
  kms_key_name?: string;
}
export interface GoogleHealthcareDatasetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleHealthcareDatasetArgs {
  location: string;
  name: string;
  encryption_spec: GoogleHealthcareDatasetArgsEncryptionSpec;
  timeouts?: GoogleHealthcareDatasetArgsTimeouts;
}
export class google_healthcare_dataset extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly time_zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareDatasetArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_dataset");
  }
}