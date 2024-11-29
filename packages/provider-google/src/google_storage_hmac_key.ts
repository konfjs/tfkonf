import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleStorageHmacKeyArgs {
  service_account_email: string;
  state?: string;
  timeouts: Timeouts;
}
export class google_storage_hmac_key extends TerraformResource {
  readonly access_id!: string;
  readonly id?: string;
  readonly project?: string;
  readonly secret!: string;
  readonly time_created!: string;
  readonly updated!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageHmacKeyArgs) {
    super(config, "resource", args, resourceName, "google_storage_hmac_key");
  }
}