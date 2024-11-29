import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapClientArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleIapClientArgs {
  brand: string;
  display_name: string;
  timeouts: GoogleIapClientArgstimeouts;
}
export class google_iap_client extends TerraformResource {
  readonly client_id!: string;
  readonly id?: string;
  readonly secret!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapClientArgs) {
    super(config, "resource", args, resourceName, "google_iap_client");
  }
}