import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GooglePublicCaExternalAccountKeyArgs {
  location?: string;
  timeouts: Timeouts;
}
export class google_public_ca_external_account_key extends TerraformResource {
  readonly b64_mac_key!: string;
  readonly id?: string;
  readonly key_id!: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePublicCaExternalAccountKeyArgs) {
    super(config, "resource", args, resourceName, "google_public_ca_external_account_key");
  }
}