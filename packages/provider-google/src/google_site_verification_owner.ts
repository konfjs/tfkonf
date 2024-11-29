import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleSiteVerificationOwnerArgs {
  email: string;
  web_resource_id: string;
  timeouts: Timeouts;
}
export class google_site_verification_owner extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSiteVerificationOwnerArgs) {
    super(config, "resource", args, resourceName, "google_site_verification_owner");
  }
}