import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleKmsKeyRingImportJobArgs {
  import_job_id: string;
  import_method: string;
  key_ring: string;
  protection_level: string;
  timeouts: Timeouts;
}
export class google_kms_key_ring_import_job extends TerraformResource {
  readonly attestation!: any[];
  readonly expire_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly public_key!: any[];
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsKeyRingImportJobArgs) {
    super(config, "resource", args, resourceName, "google_kms_key_ring_import_job");
  }
}